/* Derived data only. No smoothing, clipping or inference of absolute accuracy. */
(() => {
  'use strict';
  const scriptURL = document.currentScript.src;
  const root = document.getElementById('spectrum-viewer');
  if (!root) return;
  const $ = id => document.getElementById(id);
  const select = $('spectrum-sample'), windowSelect = $('spectrum-window'), mode = $('spectrum-mode');
  const probe = $('spectrum-probe'), svg = $('spectrum-chart');
  const palette = ['#333333','#b43e46','#39865c','#4376ac','#9f58a5'];
  const NS = 'http://www.w3.org/2000/svg';
  function element(tag, attrs, label) {
    const el = document.createElementNS(NS,tag);
    for (const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);
    if (label !== undefined) el.textContent = label;
    svg.appendChild(el); return el;
  }
  fetch(new URL('../data/spectra.json',scriptURL)).then(r => {
    if (!r.ok) throw new Error(`Data request failed (${r.status})`);
    return r.json();
  }).then(data => {
    const x = data.wavelength_um;
    function interpolate(y, at) {
      let hi = x.findIndex(v => v >= at);
      if (hi < 0) return y[y.length-1];
      if (hi === 0) return y[0];
      return y[hi-1]+(y[hi]-y[hi-1])*(at-x[hi-1])/(x[hi]-x[hi-1]);
    }
    function render() {
      const [lo,hi] = windowSelect.value.split(',').map(Number);
      probe.min=lo; probe.max=hi; probe.value=Math.min(hi,Math.max(lo,+probe.value));
      const at = +probe.value, all=select.value==='all';
      if (all) mode.value='spectra';
      mode.disabled=all;
      const difference=mode.value==='difference';
      const records = all ? [1,2,3,4,5].map((s,i) => ({...data.conditions[`st${s}_muestra`],label:`ST${s} levelled`,colour:palette[i]}))
        : [{...data.conditions[`st${select.value}_muestra`],label:'Levelled',colour:'#bd4b59'},
           {...data.conditions[`st${select.value}_muestramovida`],label:'Moved / rough',colour:'#406ca5'}];
      const traces=difference ? [{label:'Moved − levelled',colour:'#70508b',epsilon:records[1].epsilon.map((v,i)=>v-records[0].epsilon[i])}] : records;
      let points=traces.flatMap(r => r.epsilon.filter((_,i)=>x[i]>=lo && x[i]<=hi));
      let min=Math.min(...points),max=Math.max(...points);
      if(difference){const bound=Math.max(.01,Math.abs(min),Math.abs(max))*1.15;min=-bound;max=bound;}
      else{const pad=Math.max(.02,(max-min)*.12);min-=pad;max+=pad;}
      const width=Math.max(320,Math.min(800,root.clientWidth-40));
      svg.setAttribute('viewBox',`0 0 ${width} 380`);
      const X=v=>65+(v-lo)/(hi-lo)*(width-90), Y=v=>320-(v-min)/(max-min)*285;
      svg.replaceChildren();
      for(let i=0;i<=5;i++) {
        let v=lo+(hi-lo)*i/5;
        element('line',{x1:X(v),x2:X(v),y1:35,y2:320,stroke:'#b7afbf','stroke-opacity':'.25'});
        element('text',{x:X(v),y:342,'text-anchor':'middle',fill:'currentColor','font-size':13},v.toFixed(1));
        v=min+(max-min)*i/5;
        element('line',{x1:65,x2:width-25,y1:Y(v),y2:Y(v),stroke:'#b7afbf','stroke-opacity':'.25'});
        element('text',{x:55,y:Y(v)+4,'text-anchor':'end',fill:'currentColor','font-size':13},v.toFixed(difference?3:2));
      }
      if(difference)element('line',{x1:65,x2:width-25,y1:Y(0),y2:Y(0),stroke:'#8b8292','stroke-dasharray':'4 3'});
      for(const r of traces) {
        const samples=[[lo,interpolate(r.epsilon,lo)],...x.flatMap((v,i)=>v>lo&&v<hi?[[v,r.epsilon[i]]]:[]),[hi,interpolate(r.epsilon,hi)]];
        const d=samples.map(([v,y],i)=>`${i?'L':'M'}${X(v).toFixed(2)},${Y(y).toFixed(2)}`).join(' ');
        element('path',{d,fill:'none',stroke:r.colour,'stroke-width':1.8});
        element('circle',{cx:X(at),cy:Y(interpolate(r.epsilon,at)),r:4,fill:r.colour});
      }
      element('line',{x1:X(at),x2:X(at),y1:35,y2:320,stroke:'#8b8292','stroke-dasharray':'3 4'});
      element('text',{x:width/2,y:375,'text-anchor':'middle',fill:'currentColor','font-size':14},'Wavelength (μm)');
      element('text',{x:65,y:20,fill:'currentColor','font-size':14},difference?'Δε · moved minus levelled':'Emissivity estimate');
      $('spectrum-legend').replaceChildren();
      for(const r of traces){const s=document.createElement('span');s.textContent=r.label;const dot=document.createElement('i');dot.style.backgroundColor=r.colour;dot.setAttribute('aria-hidden','true');s.prepend(dot);$('spectrum-legend').appendChild(s);}
      $('spectrum-wavelength').textContent=at.toFixed(2)+' μm';
      $('spectrum-status').textContent=all?'Five levelled conditions · n = 10 acquisitions each':`ST${select.value} · ${records[0].n} levelled and ${records[1].n} moved acquisitions · reference reflectance assumed 0.95`;
      const table=document.createElement('table');
      table.innerHTML='<thead><tr><th>Condition</th><th>ε estimate</th><th>Acquisition-only u</th></tr></thead>';
      const body=document.createElement('tbody');
      for(const r of records){const row=document.createElement('tr');for(const value of [r.label,interpolate(r.epsilon,at).toFixed(4),interpolate(r.u_acquisition,at).toFixed(4)]){const td=document.createElement('td');td.textContent=value;row.appendChild(td);}body.appendChild(row);}
      table.appendChild(body);$('spectrum-values').replaceChildren(table);
      if(!all){const p=document.createElement('p');p.textContent=`Moved − levelled: ${(interpolate(records[1].epsilon,at)-interpolate(records[0].epsilon,at)).toFixed(4)}. Absolute accuracy is not established by the displayed digits.`;$('spectrum-values').appendChild(p);}
    }
    [select,windowSelect,mode].forEach(e=>e.addEventListener('change',render));
    probe.addEventListener('input',render);render();root.dataset.ready='true';
    let previousWidth=root.clientWidth;
    new ResizeObserver(()=>{if(root.clientWidth!==previousWidth){previousWidth=root.clientWidth;render();}}).observe(root);
  }).catch(err=>{$('spectrum-status').textContent='The interactive data could not be loaded. The downloadable CSV and static report remain available.';console.error(err);});
})();
