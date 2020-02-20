$(document).ready(function(){

    const projectes = [
        {
            //0
            "titol": "TBC",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            
           "imgs": [{
                "imatge": "https://i.imgur.com/k2NNkGM.jpg",
                "peu": "some info"  
            },
           {
                "imatge": "https://i.imgur.com/CW1G2XQ.jpg",
                "peu": "aa"  
            },
             {
                "imatge": "https://i.imgur.com/nTjLQ41.jpg",
                "peu": "bb"  
            }]
        },

        {
            //1
            "titol": "Lleó",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            
           "imgs": [{
                "imatge": "https://i.imgur.com/gRlHU6O.jpg",
                "peu": "some info"  
            },
           {
                "imatge": "https://i.imgur.com/Ho66d00.jpg",
                "peu": " "  
            },
             {
                "imatge": "https://i.imgur.com/ijS5Pka.jpg",
                "peu": " "  
            }]
        },

        {
            //2
            "titol": "Embarcada",
            "text": "",
            
           "imgs": [{
                "imatge": "https://i.imgur.com/kVk22o4.jpg",
                "peu": "s"  
            },
           {
                "imatge": "https://i.imgur.com/Q4plD9k.jpg",
                "peu": ""  
            }]
        },
        
        {
            //3
            "titol": "Foodgoneta",
            "text": "",
            
           "imgs": [{
                "imatge": "https://imgur.com/lCsPyGO.jpg",
                "peu": "s"  
            },
           {
                "imatge": "https://imgur.com/zPLqB0S.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/F27goFz.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/8O67Gma.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/Lr4dFGu.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/JECQCcm.jpg",
                "peu": ""  
            }]
        },
        
        {
            //4
            "titol": "Concurs de Castells",
            "text": "",
            
           "imgs": [{
                "imatge": "https://imgur.com/flxfJ7H.jpg",
                "peu": "s"  
            },
           {
                "imatge": "https://imgur.com/PQYI83T.jpg",
                "peu": ""  
            }]
        },

        {
            //5
            "titol": "AFAVC",
            "text": "",
            
           "imgs": [{
                "imatge": "https://imgur.com/SPgSjS2.jpg",
                "peu": "s"  
            },
           {
                "imatge": "https://imgur.com/SA4hA78.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/6iGHjzx.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/h9shttk.jpg",
                "peu": ""  
            }]
        },

        {
            //6  
            "titol": "iVIneraris",
            "text": "",
            
           "imgs": [{
                "imatge": "https://imgur.com/wmcVcqI.jpg",
                "peu": "s"  
            },
           {
                "imatge": "https://imgur.com/S5c2Wqc.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/AUmSjNe.jpg",
                "peu": ""  
            }]
        },

        {
            //7
            "titol": "Feel Alive",
            "text": "",
            
           "imgs": [{
                "imatge": "https://imgur.com/2osnNtm.jpg",
                "peu": "s"  
            },
           {
                "imatge": "https://imgur.com/FsSlGfl.jpg",
                "peu": ""  
            },
            {
                "imatge": "https://imgur.com/MHZoRyR.jpg",
                "peu": ""  
            },
            {
                 "imatge": "https://imgur.com/VISBcdM.jpg",
                 "peu": ""  
             },
           {
                "imatge": "https://imgur.com/5Q5rNcH.jpg",
                "peu": ""  
            },
            {
                 "imatge": "https://imgur.com/HuyrjXN.jpg",
                 "peu": ""  
             }]
        },
        
    ];



    // ---------------------------- END OF OBJECT -------------------------------------------


    var f = 0;

    for(j = 0; j<projectes.length; j++){
        var firstWord = projectes[j].titol.split(" ").join("");
        var newProject = "<div class='projecte' id='" + j + "'><img id="+firstWord+"></div>";
       
        $("#projectes").append(newProject);
        $("#"+firstWord).css("background-image", "url('"+ projectes[j].imgs[0].imatge +"')");
    }

    function hide (){
        $("section").css("display", "none");
    }

    $(".options").click(function(e){
        e = $(this).attr("id");
        hide();
        if(e == "op1") $("#projectes").css("display", "flex");
        else $("#about").css("display", "flex");
        $(".options").css("font-weight", "normal");
        $("#" + e).css("font-weight", "bold");
    });

    $(document).on('click', '.insideRoll', function(e) {
        e = $(this).attr("class").split(' ')[1];
        $("#main").css("background-image", "url('" + projectes[f].imgs[e].imatge + "')" );
        $(".imgs p").html(projectes[f].imgs[e].peu); 
    });

    function buildProject(num){
        f = num;
        var width = $(window).width();
        console.log(width);
        $(".insideRoll").remove();
        $("#projecte1 h2").html(projectes[num].titol);
        $("#projecte1 .text p").html(projectes[num].text);
   
        for(let i = 0; i<projectes[num].imgs.length; i++){
            var newImg = "<div class='insideRoll " + i + "'></div>";
            $(".roll").append(newImg);
            $("." + i).css("background-image", "url('" + projectes[num].imgs[i].imatge + "')");
        }
        $("#main").css("background-image", "url('" + projectes[num].imgs[0].imatge + "')");
        $(".imgs p").html(projectes[num].imgs[0].peu);  
    }

    $(".projecte").click(function(f){
        f = $(this).attr("id");
        hide();
        buildProject(f);

        $("#projecte1").css("display", "flex");
    });

    hide();
    $("#projectes").css("display", "flex");
});