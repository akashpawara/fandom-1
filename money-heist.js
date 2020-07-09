$(".heist-butt").on("click", function () {
    let task = $(".task-header").html();
    switch(task){
        case "TASK 1":
            $(".task-header").html("TASK 2");
            $(".task-content").html("Phoenix is devastated & troubled with the recent ban on tiktok</br>It was her task to keep the heist page updated</br>To please the heist supporters, you have to make a tiktok video on the song 'kal raat mili mujhe ek ladhki'");
            break;
        case "TASK 2":
            $(".task-header").html("TASK 3");
            $(".task-content").html("The crowd seemed to be pleased with your tiktok to such an extent that they want you to dance to their favourite singers song 'Naach ke pagal' - Dhinchak Pooja");
            break;
        case "TASK 3":
            $(".task-header").html("TASK 4");
            $(".task-content").html("Call the number which Mumbai gives you and talk about your birthday for a minute, if the person cuts the call before a minute, you'll have to dial the next number");
            break;
        case "TASK 4":
            $(".task-header").html("TASK 5");
            $(".task-content").html("Milan has come up with a new look for the heist. It is quite a painful task but to outstan & please crowd you have to do </br> - was your leg </br> - paint your nail </br> - and let Mumbai do make up on your face");
            break;
        case "TASK 5":
            $(".task-header").html("TASK 6");
            $(".task-content").html("According to Cairo's latest survey the police have begin to suspect you. You need to make your background very clear. So make a video and talk about you being adopted.");
            break;
        case "TASK 6":
            $(".task-header").html("TASK 7");
            $(".task-content").html("You also need an ally against the police so Phoenix, Milan, Colombia suggest you to call Gauri & compliment her");
            break;
        case "TASK 7":
            $(".task-header").html("TASK 8");
            $(".task-content").html("The people have got restless & have begin to lose their interest in the heist. They want you to sing 'Angel' - Taher shah");
            break;
        case "TASK 8":
            $(".task-header").html("TASK 9");
            $(".task-content").html("The heist fans say they will stop requesting other tasks if you let Mumbai sign your chest. This way we all can work in Peace.");
            break;
        default:
            $(".heist-text").css("background","none");
            $(".heist-text").html("");
            $(".heist-card-containers").css("display","none");
            $(".task").css("display","grid");
            $(".task-header").html("TASK 1");
            $(".heist-butt-header").html("Did you complete the task?");
            $(".heist-butt").html("Yes!");
            $(".task-content").html("It's simple, your identity cannot be revealed anywhere. You have got to change your insta name to 'SassQueen' ");
            break;
    }
});