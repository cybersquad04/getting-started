## Storyboard (Round 2)

Experiment 1: Verification of Thevenin's Theorem.

### 1. Story Outline:


In network there are too many theorems to solve any given network like for any given
easy/complex network KCL (Kirchhoff’s Current Law) and KVL (Kirchhoff’s Voltage Law)
Will definitely work to solve it and identifying current/voltage across any branch in circuit
though it is very time consuming in large/complex circuits.
Now there are too many theorems are there to deal with complex circuits in a easier
way, one such method is Thevenin’s theorem which is used to calculate current in branch of
circuit by reducing the circuit in equivalent thevenin’s circuit , which is basically a series
combination of Vth , Rth and load resistance R L .
So in simulator first learn the correct placement of voltmeter and ammeter in any arbitrary
given network. After that attempt some question on calculation of equivalent resistance on
given arbitrary resistive network so that you can call recall formulas of calculating
equivalent resistance for different connections of resistance.
Then finally comes to given complex circuit where R L is predefined though which you have
to identify load current. To do that we first have to reduce circuit to equivalent thevenin’s
circuit by calculating Rth and Vth across R L . Here you can change the values of source and
resistances to have a good understanding of Rth and Vth calculation. After getting
equivalent circuit directly apply KCL and find the required load current and do compare that
value with value of current case if you directly put an ammeter across load resistance.

### 2. Story:
### 2.1 Set the Visual Stage Description:


This is the first image which appear in simulator to check and recall student’s basic
concepts of ammeter and voltmeter connections across the load or any other element if
required. So here target is to make both connections like series/parallel is available for the
instruments (ammeter and voltmeter). If students do wrong connections then simulator
starts flashing “Wrong Connection”. To get different results there must be options available
to change values of R L and V S . St

![title](https://https://github.com/cybersquad04/getting-started/blob/master/storyboard/Images/CC1.JPG.jpg)

This is the second image which appear in simulator to check and recall student’s basic
concepts of series circuit with options to change values of R 1 and R 2 to calculate R AB .




.
This is the third image which appear in simulator to check and recall student’s basic
concepts of parallel circuit with options to change values of R 3 and R 4 to calculate R CD .


This is the fourth image which appear in simulator to check and recall student’s basic
concepts of combination of series and parallel circuit with options to change values of R 5 , R 6
and R 7 to calculate R EF .



This is the fifth image which appear in simulator to check and recall student’s basic
concepts of star to delta and delta to star connection with options to change values of R 8 ,
R 9 and R 10 to calculate R 11 R 12 and R 13 and vice versa.



This is the sixth image which appear in simulator to check whether students are able to find
equivalent resistance when it consists of combination of above circuits. Here allow students
to feed values of different resistances to calculate equivalent R GH .



Then comes the final circuit in which student will apply thevenin’s theorem to find current
flowing through load resistance R L . Student will first enter all values the will calculate Rth,
Vth and I L one by one then only he can move to next step. After finally getting value I L he
will compare it with result obtained by simply placing ammeter in series with load
resistance.



### 2.2 Set User Objectives &amp; Goals:


(1) User would be able to understand the correct connections of ammeter and voltmeter
while calculating voltage and current across/through that element.
(2) User will remember formulas and procedure to calculate equivalent resistance for
different connections of resistances.
(3) User would be able to understand correct procedure to calculate Rth and Vth.
(4) User will learn use as well as importance of thevenins theorem while solving
complex circuits instead of going for conventional methods (KVL and KCL).
### 2.3 Set the Pathway Activities:


(1) Start the simulator which display image to find the correct placement of voltmeter
and ammeter for identifying voltage/current across/through load resistance.
(2) Then move to next and calculate equivalent resistance of different connections of
resistances like series combination, parallel combination , combination of series &amp;
parallel , star to delta/ delta to star conversion and finally combination of all.
(3) After learning the basic fundamentals required, move to actual circuit in which you
have to apply thevenin’s and put values of resistances and voltage source.
(4) Calculate and fill correct values of Rth and Vth so that you can move to next can
draw equivalent thevenin circuit .
(5) After getting the equivaent circuit just try to find I L and check result.
(6) If result is correct then do check the same by using conventional method.
### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:


(1) User should understand that which switches they have to keep open/close to get
correct readings of voltage and current.
(2) User should calculate equivalent resistance for different combinations of resistances
one by one.
(3) User should calculate equivalent resistance of complex circuit having combination of
different connections.
(4) User should calculate Rth and Vth value after entering different required values.
(5) User should calculate and enter value of I L and do compare it with conventional
method.

### 2.5 Allow pitfalls:

(1) User should do reserve (wrong) connections of voltmeter and ammeter and match
reading that you obtained by solving using KVL and KCL.
(2) While calculating the Rth student should check result (I L ) obtained by both open/short
circuiting the voltage source with that obtained by conventional method.
(3) While calculating the Vth student should check result (I L ) obtained by both open/short
circuiting the voltage source with that obtained by conventional method.

### 2.6 Conclusion:


User should attend questions one by one so that he can move to final part that is
calculation of load current. If user attempt questions immediately it will show pop up
message whether answer is correct / incorrect and will also request you to please try again.
If user crossed each step successfully and at last both values i.e obtained from thevenin
and by conventional method it will display “ Congratulations you have learned successfully “


### 2.7 Equations/formulas:


Rth(series)=R1+R2+r3

Rth(parallel)=\frac{R1*R2}{R1+R2}


Star to Delta Conversion

Rb = \frac{(R1*R2)+(R1*R3)+(R2*R3)}{R2}
Rc = \frac{(R1*R2)+(R1*R3)+(R2*R3)}{R3}
Ra = \frac{(R1*R2)+(R1*R3)+(R2*R3)}{R1}


Delta to Star Conversion

R1 = \frac{Rb*Rc}{Ra+Rb+Rc}
R2 = \frac{Ra*Rb}{Ra+Rb+Rc}
R3 = \frac{Rb*Ra}{Ra+Rb+Rc}


### 3. Flowchart

lse keep asking for right value)

Find R equ in parallel case

If value is true (move to next step else keep asking for right value)

Find R equ in series/parallel combination case

If value is true (move to next step else keep asking for right value)
Find delta resistances in case star to delta conversion
If value is true (move to next step else keep asking for right value)
Find star resistances in case delta to star conversion
If value is true (move to next step else keep asking for right value)

Calculate R equ

If value is true (move to next step else keep asking for right value)

Calculate Rth
Calculate Vth

Calculate I L by using thevenin’s theorem
Calculate I L by using conventional method
Match whether both results are nearly same in round figure
If yes (flash congratulations you have learned thevenin’s theorem)

If no (flash do try it again)

### 4. Mindmap
Write/paste/attach your content here
### 5. Storyboard
Write/paste/attach your content her
