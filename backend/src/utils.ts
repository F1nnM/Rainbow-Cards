export function arrayUnique(array: Array<any>) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

export function customSort(array: Array<string>) {

    function isNumber(s: string){
        return !isNaN(s) && !isNaN(parseFloat(s))
    }

    return array.sort((a, b) => {
        if (isNumber(a[0]) && ! isNumber(b[0]))
            return 1;
        if (!isNumber(a[0]) && isNumber(b[0]))
            return -1;
        return a.localeCompare(b)

    })
}

export function shuffleArrayInplace(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}