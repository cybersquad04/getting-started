     
           function addNumbers()

                {

                        var R1 = parseInt(document.getElementById("value1").value);

                        var R2 = parseInt(document.getElementById("value2").value);
                        var R3 = parseInt(document.getElementById("value3").value);

                        var ansD = document.getElementById("answer");

                        var RL = document.getElementById("load");
                        RL.value = R3;
                        ansD.value = (R1*R2)/(R1+R2);

                }

   