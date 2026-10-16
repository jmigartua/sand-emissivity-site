"""Analytical checks and illustrative calculations, never measured sand data."""
from pathlib import Path
import json, math
import numpy as np
from scipy.integrate import quad
from scipy.constants import h,c,k

def fraction(a_um,b_um,T):
    xlow=h*c/(b_um*1e-6*k*T)
    xhigh=h*c/(a_um*1e-6*k*T)
    return 15/math.pi**4*quad(lambda x:x**3/np.expm1(x),xlow,min(xhigh,700),epsabs=1e-12)[0]

def model(x):
    A,B,C=x
    return C*A/B

x=np.array([10.,100.,.95]); A,B,C=x
g=np.array([C/B,-C*A/B**2,A/B])
gnum=np.array([(model(x+np.eye(3)[i]*1e-5)-model(x-np.eye(3)[i]*1e-5))/2e-5 for i in range(3)])
assert np.allclose(g,gnum,rtol=1e-7,atol=1e-9)
assert abs(fraction(.01,1e7,300)-1)<1e-9
scale=.01*x[:2]
assert abs(g[:2]@np.outer(scale,scale)@g[:2])<1e-16
R=.1;uR=.02*R
assert np.isclose(uR/(1-R),.0022222222222222222)
results={'label':'Illustrative physical calculations, not experimental results',
'checks':{'ratio_gradient_finite_difference':True,'blackbody_normalization':True,'shared_scale_covariance_cancellation':True},
'planck_fractions_300K':{f'{a:g}-{b:g} um':fraction(a,b,300) for a,b in [(3,18),(1.5,25),(8,14),(3,5)]},
'uncertainty_example':{'R':R,'epsilon':1-R,'u_R_relative':.02,'u_R_absolute':uR,'u_epsilon_absolute':uR,'u_epsilon_relative':uR/(1-R)},
'misalignment_example_relative_rectangular_half_width_0_02':{'u_relative':.02/math.sqrt(3),'u_epsilon_at_R_0_1':.1*.02/math.sqrt(3)},
'angle_13_deg_squared_radians':math.radians(13)**2}
Path(__file__).with_name('calculation_checks.json').write_text(json.dumps(results,indent=2))
print(json.dumps(results,indent=2))
