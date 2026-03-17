function CalculateResult(){
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("enter the marks of subject")+((i+1)));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90){
        grade='A+';
    } if(average>80){
        grade='A';
    } if(average>70){
        grade='B';
    } if(average>60){
        grade='C';
    } if(average>50){
        grade='D';
    }
    else{
        document.write("FAIL <br/>");
    }
    let result=getElementById("result").innerHTML="total marks"+total+"br/"+"Average Marks"+average+"<br/>"
}