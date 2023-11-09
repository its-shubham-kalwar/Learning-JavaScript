// for

for (let i = 0; i<= 10; i++){
    const element = i ;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}
// output --
// 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
// 10



for (let i = 0; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(j=0; j<=10; j++){
        console.log(`Inner loop value ${j} and inner loop${i}`);
    }
}
// output -- 
// Outer loop value: 0
// Inner loop value 0 and inner loop0
// Inner loop value 1 and inner loop0
// Inner loop value 2 and inner loop0
// Inner loop value 3 and inner loop0
// Inner loop value 4 and inner loop0
// Inner loop value 5 and inner loop0
// Inner loop value 6 and inner loop0
// Inner loop value 7 and inner loop0
// Inner loop value 8 and inner loop0
// Inner loop value 9 and inner loop0
// Inner loop value 10 and inner loop0
// Outer loop value: 1
// Inner loop value 0 and inner loop1
// Inner loop value 1 and inner loop1
// Inner loop value 2 and inner loop1
// Inner loop value 3 and inner loop1
// Inner loop value 4 and inner loop1
// Inner loop value 5 and inner loop1
// Inner loop value 6 and inner loop1
// Inner loop value 7 and inner loop1
// Inner loop value 8 and inner loop1
// Inner loop value 9 and inner loop1
// Inner loop value 10 and inner loop1
// Outer loop value: 2
// Inner loop value 0 and inner loop2
// Inner loop value 1 and inner loop2
// Inner loop value 2 and inner loop2
// Inner loop value 3 and inner loop2
// Inner loop value 4 and inner loop2
// Inner loop value 5 and inner loop2
// Inner loop value 6 and inner loop2
// Inner loop value 7 and inner loop2
// Inner loop value 8 and inner loop2
// Inner loop value 9 and inner loop2
// Inner loop value 10 and inner loop2
// Outer loop value: 3
// Inner loop value 0 and inner loop3
// Inner loop value 1 and inner loop3
// Inner loop value 2 and inner loop3
// Inner loop value 3 and inner loop3
// Inner loop value 4 and inner loop3
// Inner loop value 5 and inner loop3
// Inner loop value 6 and inner loop3
// Inner loop value 7 and inner loop3
// Inner loop value 8 and inner loop3
// Inner loop value 9 and inner loop3
// Inner loop value 10 and inner loop3
// Outer loop value: 4
// Inner loop value 0 and inner loop4
// Inner loop value 1 and inner loop4
// Inner loop value 2 and inner loop4
// Inner loop value 3 and inner loop4
// Inner loop value 4 and inner loop4
// Inner loop value 5 and inner loop4
// Inner loop value 6 and inner loop4
// Inner loop value 7 and inner loop4
// Inner loop value 8 and inner loop4
// Inner loop value 9 and inner loop4
// Inner loop value 10 and inner loop4
// Outer loop value: 5
// Inner loop value 0 and inner loop5
// Inner loop value 1 and inner loop5
// Inner loop value 2 and inner loop5
// Inner loop value 3 and inner loop5
// Inner loop value 4 and inner loop5
// Inner loop value 5 and inner loop5
// Inner loop value 6 and inner loop5
// Inner loop value 7 and inner loop5
// Inner loop value 8 and inner loop5
// Inner loop value 9 and inner loop5
// Inner loop value 10 and inner loop5
// Outer loop value: 6
// Inner loop value 0 and inner loop6
// Inner loop value 1 and inner loop6
// Inner loop value 2 and inner loop6
// Inner loop value 3 and inner loop6
// Inner loop value 4 and inner loop6
// Inner loop value 5 and inner loop6
// Inner loop value 6 and inner loop6
// Inner loop value 7 and inner loop6
// Inner loop value 8 and inner loop6
// Inner loop value 9 and inner loop6
// Inner loop value 10 and inner loop6
// Outer loop value: 7
// Inner loop value 0 and inner loop7
// Inner loop value 1 and inner loop7
// Inner loop value 2 and inner loop7
// Inner loop value 3 and inner loop7
// Inner loop value 4 and inner loop7
// Inner loop value 5 and inner loop7
// Inner loop value 6 and inner loop7
// Inner loop value 7 and inner loop7
// Inner loop value 8 and inner loop7
// Inner loop value 9 and inner loop7
// Inner loop value 10 and inner loop7
// Outer loop value: 8
// Inner loop value 0 and inner loop8
// Inner loop value 1 and inner loop8
// Inner loop value 2 and inner loop8
// Inner loop value 3 and inner loop8
// Inner loop value 4 and inner loop8
// Inner loop value 5 and inner loop8
// Inner loop value 6 and inner loop8
// Inner loop value 7 and inner loop8
// Inner loop value 8 and inner loop8
// Inner loop value 9 and inner loop8
// Inner loop value 10 and inner loop8
// Outer loop value: 9
// Inner loop value 0 and inner loop9
// Inner loop value 1 and inner loop9
// Inner loop value 2 and inner loop9
// Inner loop value 3 and inner loop9
// Inner loop value 4 and inner loop9
// Inner loop value 5 and inner loop9
// Inner loop value 6 and inner loop9
// Inner loop value 7 and inner loop9
// Inner loop value 8 and inner loop9
// Inner loop value 9 and inner loop9
// Inner loop value 10 and inner loop9
// Outer loop value: 10
// Inner loop value 0 and inner loop10
// Inner loop value 1 and inner loop10
// Inner loop value 2 and inner loop10
// Inner loop value 3 and inner loop10
// Inner loop value 4 and inner loop10
// Inner loop value 5 and inner loop10
// Inner loop value 6 and inner loop10
// Inner loop value 7 and inner loop10
// Inner loop value 8 and inner loop10
// Inner loop value 9 and inner loop10
// Inner loop value 10 and inner loop10


for (let i=1; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`Inner loop value ${j} and inner loop${i}`);
        console.log(i + "*" + j + "=" + i*j );
    }
}
// output --
// 1*1=1
// 1*2=2
// 1*3=3
// 1*4=4
// 1*5=5
// 1*6=6
// 1*7=7
// 1*8=8
// 1*9=9
// 1*10=10
// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// 2*6=12
// 2*7=14
// 2*8=16
// 2*9=18
// 2*10=20
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30
// 4*1=4
// 4*2=8
// 4*3=12
// 4*4=16
// 4*5=20
// 4*6=24
// 4*7=28
// 4*8=32
// 4*9=36
// 4*10=40
// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50
// 6*1=6
// 6*2=12
// 6*3=18
// 6*4=24
// 6*5=30
// 6*6=36
// 6*7=42
// 6*8=48
// 6*9=54
// 6*10=60
// 7*1=7
// 7*2=14
// 7*3=21
// 7*4=28
// 7*5=35
// 7*6=42
// 7*7=49
// 7*8=56
// 7*9=63
// 7*10=70
// 8*1=8
// 8*2=16
// 8*3=24
// 8*4=32
// 8*5=40
// 8*6=48
// 8*7=56
// 8*8=64
// 8*9=72
// 8*10=80
// 9*1=9
// 9*2=18
// 9*3=27
// 9*4=36
// 9*5=45
// 9*6=54
// 9*7=63
// 9*8=72
// 9*9=81
// 9*10=90
// 10*1=10
// 10*2=20
// 10*3=30
// 10*4=40
// 10*5=50
// 10*6=60
// 10*7=70
// 10*8=80
// 10*9=90
// 10*10=100



// break and continue

