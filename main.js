
    function num1() {
        return document.getElementById("cal").innerHTML += "1";
    }

    function num2() {
        return document.getElementById("cal").innerHTML += "2";
    }

    function num3() {
        return document.getElementById("cal").innerHTML += "3";
    }

    function num4() {
        return document.getElementById("cal").innerHTML += "4";
    }

    function num5() {
        return document.getElementById("cal").innerHTML += "5";
    }

    function num6() {
        return document.getElementById("cal").innerHTML += "6";
    }

    function num7() {
        return document.getElementById("cal").innerHTML += "7";
    }

    function num8() {
        return document.getElementById("cal").innerHTML += "8";
    }

    function num9() {
        return document.getElementById("cal").innerHTML += "9";
    }

    function num0() {
        return document.getElementById("cal").innerHTML += "0";
    } 

    function numpoint() {
        return document.getElementById("cal").innerHTML += ".";
    }


    function opadd() {
        return document.getElementById("cal").innerHTML += "+";
    }

    function opmin() {
        return document.getElementById("cal").innerHTML += "-";
    }

    function opmul() {
        return document.getElementById("cal").innerHTML += "*";
    }

    function opdiv() {
        return document.getElementById("cal").innerHTML += "/";
    }


    function opequal() {

        let cal = document.getElementById("cal").innerHTML;

        while (cal.charAt(0) == "0") {
            cal = cal.substring(1);
        }

        let res = eval(cal);
        document.getElementById("ans").innerHTML = res;
    }

    function opclear() {
        document.getElementById("cal").innerHTML = "";
        document.getElementById("ans").innerHTML = "";
    }

    function opclearlast() {
        let charclr = document.getElementById("cal").innerHTML.slice(0, length - 1);
        // let charclr = document.getElementById("cal").innerHTML.substring(1); 
        return document.getElementById("cal").innerHTML = charclr;
    }