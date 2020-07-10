$(".heist-butt").on("click", function () {
    let task = $(".task-header").html();
    switch(task){
        case "TASK 1":
            $(".task-header").html("TASK 2");
            $(".task-content").html("Phoenix is devastated & troubled with the recent ban on tiktok. </br>It was her task, to keep the heist page updated. </br>To please the heist supporters, you have to make a tiktok video on the song </br>'Kal Raat Mili Mujhe Ek Ladhki'");
            break;
        case "TASK 2":
            $(".task-header").html("TASK 3");
            $(".task-content").html("The crowd seemed to be pleased with your tiktok to such an extent, that they want you to dance to their favourite singer's song </br>'Naach ke pagal' - Dhinchak Pooja");
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
            $(".task-content").html("According to Cairo's latest survey, the police have begin to suspect you.</br> You need to make your background very clear.</br> So, make a video and talk about you being adopted.");
            break;
        case "TASK 6":
            $(".task-header").html("TASK 7");
            $(".task-content").html("You need an ally against the police.</br> So, Phoenix, Milan, Colombia suggest you to call Namrata & compliment her.");
            break;
        case "TASK 7":
            $(".task-header").html("TASK 8");
            $(".task-content").html("People are getting restless & have begun to lose their interest in the heist. </br>They want you to sing</br> 'Angel' by Taher shah");
            break;
        case "TASK 8":
            $(".task-header").html("TASK 9");
            $(".task-content").html("The heist fans say they will stop requesting other tasks, only if you let Mumbai sign your chest.</br> This way we all can work in Peace.");
            break;
        default:
            $(".heist-text").css("background","none");
            $(".heist-text").html("");
            $(".heist-card-containers").css("display","none");
            $(".task").css("display","grid");
            $(".task-header").html("TASK 1");
            $(".heist-butt-header").html("Did you complete the task?");
            $(".heist-butt").html("Yes!");
            $(".task-content").html("It's simple, your identity cannot be revealed anywhere. </br> You have to change your insta name to '_SassQueen_' ");
            break;
    }
});