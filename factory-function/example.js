const bird = () =>
{
    const name = 'woodpicker';
    return {
        getName : () => console.log(name)
    }
}

const anotherBird = bird();

$('button').click(anotherBird.getName);