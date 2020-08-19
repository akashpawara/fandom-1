// var modal = document.getElementById("myModal");
let i = 0;
const intro1="The Professor has planned to perform another heist for Heramb's Birthday.";
const intro2="Since there is a pandemic going around, Professor didn't want to risk lives.";
const intro3="Hence, a virtual one was planned."
const note1="Phoenix, Melbourne, Colombia, Milan, Cairo are working on the heist, but have several problems that need to be resolved.";
const note2="You being the game player and morale keeper, have to maintain the peace and prevent chaos.";
const note3="Mumbai will help you accomplish the tasks."
const speed = 50;
console.log(note1.length);
console.log(note2.length);
console.log(note3.length);
typeWriter1 = () => {
    if (i < intro1.length) {
        document.getElementById("heist-intro-1").innerHTML += intro1.charAt(i);
        // console.log(intro1.charAt(i));
        i++;
        setTimeout(typeWriter1, speed);
    }
    else if (i === intro1.length) { i=0; }
}
typeWriter2 = () => {
    if (i < intro2.length) {
        document.getElementById("heist-intro-2").innerHTML += intro2.charAt(i);
        i++;
        setTimeout(typeWriter2, speed);
    }
    else if (i === intro2.length) { i=0; }
}
typeWriter3 = () => {
    if (i < intro3.length) {
        document.getElementById("heist-intro-3").innerHTML += intro3.charAt(i);
        i++;
        setTimeout(typeWriter3, speed);
    }
    else if (i === intro3.length) { i=0; }
}
typeWriter4 = () => {
    if (i < note1.length) {
        document.getElementById("heist-note-1").innerHTML += note1.charAt(i);
        // console.log(note1.charAt(i));
        i++;
        setTimeout(typeWriter4, speed);
    }
    else if (i === note1.length) { i=0;}
}
typeWriter5 = () => {
    if (i < note2.length) {
        document.getElementById("heist-note-2").innerHTML += note2.charAt(i);
        i++;
        setTimeout(typeWriter5, speed);
    }
    else if (i === note2.length) { i=0; }
}
typeWriter6 = () => {
    if (i < note3.length) {
        document.getElementById("heist-note-3").innerHTML += note3.charAt(i);
        i++;
        setTimeout(typeWriter6, speed);
    }
    else if (i === note3.length) { i=0; }
}
setTimeout(typeWriter1, 500);
setTimeout(typeWriter2, 4500);
setTimeout(typeWriter3, 8500);
setTimeout(function(){$(".toast-intro").css("display","none"); $(".heist-container").css("display","block");}, 11000);
$(".heist-butt").on("click", function () {
    let task = $(".task-header").html();
    switch(task){
        case "TASK 1":
            $(".task-header").html("TASK 2");
            $(".task-content").html("Phoenix is devastated and troubled with the recent ban on Tiktok. </br>It was her task, to keep the heist page updated. </br>To please the heist supporters, you have to make a Tiktok video on the song </br>'Kal Raat Mili Mujhe Ek Ladhki'");
            break;
        case "TASK 2":
            $(".task-header").html("TASK 3");
            $(".task-content").html("The crowd seems to be pleased with your Tiktok to such an extent, that they want you to dance to their favourite singer's song </br>'Naach ke pagal' - Dhinchak Pooja");
            break;
        case "TASK 3":
            $(".task-header").html("TASK 4");
            $(".task-content").html("Call the number which Mumbai gives you and talk about your birthday for a minute.</br> If the person cuts the call before a minute, You'll have to dial the next number.");
            break;
        case "TASK 4":
            $(".task-header").html("TASK 5");
            $(".task-content").html("Milan has come up with a new look for the heist.</br> It is quite a painful task, but to outstand & please the crowd you have to </br> - Wax your leg</br>- Paint your nails</br>- Wear heels</br>- Let Mumbai apply cosmeticts to your face</br>After getting ready, strut around and flaunt the new heist look.");
            $(".task-5-list").css("display","block");
            break;
        case "TASK 5":
            $(".task-header").html("TASK 6");
            $(".task-content").html("Cairo has gotten latest information via his sources, taht the police have begin to suspect you.</br> You need to make sure your background is secure.</br> So, make a video and talk about you being adopted.");
            break;
        case "TASK 6":
            $(".task-header").html("TASK 7");
            $(".task-content").html("You need an ally against the police.</br> So, Phoenix, Milan, Colombia suggest you to call Namrata & compliment her.");
            break;
        case "TASK 7":
            $(".task-header").html("TASK 8");
            $(".task-content").html("People are getting restless and have begun to lose their interest in the heist. </br>They want you to sing</br> 'Angel' by Taher shah");
            break;
        case "TASK 8":
            $(".task-header").html("TASK 9");
            $(".task-content").html("The heist fans say they will stop requesting other tasks, only if you let Mumbai sign your chest.</br> This way we all can work in Peace.");
            $(".heist-butt-header").html("If you comepleted the task, then Let's");
            $(".heist-butt").html("Escape!");
            break;
        case "TASK 9":
            window.location.replace("https://akashpawara.github.io/fandom-2/");
            break;
        default:
            $(".heist-container").css("display","none");
            $(".toast-note").css("display","block"); 
            setTimeout(typeWriter4, 500);
            setTimeout(typeWriter5, 7000);
            setTimeout(typeWriter6, 12000);
            setTimeout(function(){
                $(".toast-note").css("display","none"); 
                $(".heist-container").css("display","block");
                $(".heist-text").css("background","none");
                $(".heist-text").html("");
                $(".heist-card-containers").css("display","none");
                $(".task").css("display","grid");
                $(".task-header").html("TASK 1");
                $(".heist-butt-header").html("Did you complete the task?");
                $(".heist-butt").html("Yes!");
                $(".task-content").html("It's simple, your identity can't be revealed anywhere. </br> You have to change your Instagram Username to '_SassQueen_' ");
            }, 15500);  
            break;
    }
});