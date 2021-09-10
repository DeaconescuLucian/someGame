window.onload = function()
{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var right = false;
    var left = false;
    var up = false;
    var down = false;
    var step = 0;
    var source = "/characters/R0.png";

    const W = canvas.getBoundingClientRect().width;
    const H = canvas.getBoundingClientRect().height;
    canvas.width = W;
    canvas.height=H;

    console.log(W)

    var posX = 20;
    var posY = 20;

    var base_image = new Image();
    base_image.src = source;
    base_image.onload = function(){
        context.drawImage(base_image,step*64,0,64,64, posX,posY ,64,64);
    }

    document.onkeyup = function(e)
    {
        e.preventDefault();
        var base_image = new Image();
        base_image.src = source;
        switch (e.key) {
            case "ArrowLeft":
                left=false;
                break;
            case "ArrowUp":
                up=false;
                break;
            case "ArrowRight":
                right = false;
                break;
            case "ArrowDown":
                down = false;
                break;
            default:
                break;
        }

        step = 0;

        base_image.onload = function(){
            if(e.key=="ArrowUp")
            {
                context.clearRect(0, 0, W, H);
                context.drawImage(base_image,step*64,192,64,64, posX,posY ,64,64);
            }
            else
            {
                if(e.key=="ArrowDown")
                {
                    context.clearRect(0, 0, W, H);
                    context.drawImage(base_image,step*64,0,64,64, posX,posY ,64,64);
                }
                else
                {
                    if(e.key=="ArrowLeft")
                    {
                        context.clearRect(0, 0, W, H);
                        context.drawImage(base_image,step*64,64,64,64, posX,posY ,64,64);
                    }
                    else
                    {
                        if(e.key=="ArrowRight")
                        {
                            context.clearRect(0, 0, W, H);
                            context.drawImage(base_image,step*64,128,64,64, posX,posY ,64,64);
                        }
                    }
                }
                
            }
            
    }
    drawHouse()
    }
    document.onkeydown = function(e)
    {
        drawHouse()
        e.preventDefault();
        var base_image = new Image();
        base_image.src = source;
        step++;

        switch (e.key) {
            case "ArrowLeft":
                left=true;
                break;
            case "ArrowUp":
                up=true;
                break;
            case "ArrowRight":
                right = true;
                break;
            case "ArrowDown":
                down = true;
                break;
            default:
                break;
        }

        if(up)
        {
            posY-=2;
        }
        if(down)
        {
            posY+=2;
        }
        if(right)
        {
            posX+=2;
        }
        if(left)
        {
            posX-=2;
        }

        if(posX<=0)
        {
            posX=0;
        }
        if(posY<=0)
        {
            posY=0;
        }
        if(posX+64>W)
        {
            posX=W-64;
        }
        if(posY+64>H)
        {
            posY=H-64;
        }

        base_image.onload = function(){
            if(up)
            {
                context.clearRect(0, 0, W, H);
                context.drawImage(base_image,step*64,192,64,64, posX,posY ,64,64);
            }
            else
            {
                if(down)
                {
                    context.clearRect(0, 0, W, H);
                    context.drawImage(base_image,step*64,0,64,64, posX,posY ,64,64);
                }
                else
                {
                    if(left)
                    {
                        context.clearRect(0, 0, W, H);
                        context.drawImage(base_image,step*64,64,64,64, posX,posY ,64,64);
                    }
                    else
                    {
                        if(right)
                        {
                            context.clearRect(0, 0, W, H);
                            context.drawImage(base_image,step*64,128,64,64, posX,posY ,64,64);
                        }
                    }
                }
                
            }
            
    }
    drawHouse()

        if(step == 3)
        {
            step = 0;
        }
        
    }

    var characters = document.querySelectorAll(".character");
    characters.forEach(element => {
        var img = document.createElement("canvas");
        img.width = 64;
        img.height = 64;
        img.id=element.id.split("c")[1];
        document.getElementById(element.id).appendChild(img);
        var thiscanvas = document.getElementById(img.id);
        var thiscontext = thiscanvas.getContext('2d');
        var base_image = new Image();
        base_image.src = `characters/R${element.id.split("c")[1]}.png`;
        var input = document.createElement("input");
        input.type="hidden";
        input.id=`input_${element.id.split("c")[1]}`
        input.value=`characters/R${element.id.split("c")[1]}.png`;
        document.getElementById(element.id).appendChild(input);
        base_image.onload = function(){
        thiscontext.drawImage(base_image,0,0,64,64, 0,0 ,64,64);

        thiscanvas.onclick = function()
        {
            context.clearRect(0, 0, W, H);
            source = document.getElementById(`input_${element.id.split("c")[1]}`).value;
            var base_image = new Image();
            base_image.src = source;
            base_image.onload = function(){
                context.drawImage(base_image,step*64,0,64,64, posX,posY ,64,64);
                drawHouse()
    }
        }
    }
    
    });

    function drawHouse()
    {
        var house_image = new Image();
        house_image.src = 'houses1.png';
        house_image.onload = function(){
            context.drawImage(house_image,338,0,430,408, W/2,H/2 ,W/4,H/4);
        }
    }

    drawHouse()
  
}