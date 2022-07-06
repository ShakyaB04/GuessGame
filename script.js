var systemGuess = Math.floor(Math.random()*100)+1
var guess = 0

function guessNumber() 
{
    var num = document.getElementById("in").value
    if( num = '' || num > 100 || num < 1)
    {
        document.getElementById('out').innerHTML = '<i>Input out of Range !!</i>'
    }
    else
    {
        guess++
        var num = parseInt(document.getElementById("in").value)
        if( num == systemGuess )
        {
            document.getElementById('out').innerHTML = '<b>Got the answer correctly</b> in '+guess+ ' Guesses'
        }
        else if( num > systemGuess )
        {
            document.getElementById('out').innerHTML = 'Guess a smaller number'
        }
        else if ( num < systemGuess )
        {
            document.getElementById('out').innerHTML = 'Guess a greater number'
        }
    }
}

