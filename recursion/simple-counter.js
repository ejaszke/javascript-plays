const countDownFrom = (num) => {
    if (num > 0) {
        console.log(num);
        countDownFrom(--num);
    }
}

countDownFrom(10);