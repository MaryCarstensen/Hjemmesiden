slideShowURL = 'SlideShow_assets/SlideShow.html';       // parameter from openSlideShowWindow.js
slideShowNS4URL = 'SlideShow_assets/SlideShowNS4.html'; // parameter from openSlideShowWindow.js

slides = new Array();
slides[0] = new Slide('../Photos 2007 Fur_files/DSC01820.jpg', '600', '800', 'Fur (and Niels)');
slides[1] = new Slide('../Photos 2007 Fur_files/DSC01821.jpg', '600', '800', 'Fur2');
slides[2] = new Slide('../Photos 2007 Fur_files/DSC01822.jpg', '800', '600', 'Fur3');
slides[3] = new Slide('../Photos 2007 Fur_files/DSC01823.jpg', '600', '800', 'Fur4');
slides[4] = new Slide('../Photos 2007 Fur_files/DSC01824.jpg', '600', '800', 'Mary on Fur');
slides[5] = new Slide('../Photos 2007 Fur_files/DSC01825.jpg', '600', '800', 'Mary hunting Fossils on Fur');
slides[6] = new Slide('../Photos 2007 Fur_files/DSC01826.jpg', '600', '800', 'Moler pit');
slides[7] = new Slide('../Photos 2007 Fur_files/DSC01827.jpg', '600', '800', 'Moler pit1');
slides[8] = new Slide('../Photos 2007 Fur_files/DSC01828.jpg', '800', '600', 'clam like fossil, Fur');
slides[9] = new Slide('../Photos 2007 Fur_files/DSC01829.jpg', '600', '800', 'Fur5');
slides[10] = new Slide('../Photos 2007 Fur_files/DSC01830.jpg', '600', '800', 'Fur6');
slides[11] = new Slide('../Photos 2007 Fur_files/DSC01831.jpg', '600', '800', 'Fur7');
slides[12] = new Slide('../Photos 2007 Fur_files/DSC01832.jpg', '600', '800', 'Fur (+our car)');
slides[13] = new Slide('../Photos 2007 Fur_files/DSC01833.jpg', '600', '800', 'the Bishop\u0027s hat, FUR');
slides[14] = new Slide('../Photos 2007 Fur_files/DSC01834.jpg', '600', '800', 'Fur Museum-knipling');
slides[15] = new Slide('../Photos 2007 Fur_files/DSC01835.jpg', '600', '800', 'Fur Museum-lace');
slides[16] = new Slide('../Photos 2007 Fur_files/DSC01836.jpg', '600', '800', 'Fur Museum');
slides[17] = new Slide('../Photos 2007 Fur_files/DSC01838.jpg', '600', '800', 'DSC01838.JPG');
slides[18] = new Slide('../Photos 2007 Fur_files/DSC01841.jpg', '600', '800', 'DSC01841.JPG');
slides[19] = new Slide('../Photos 2007 Fur_files/DSC01842.jpg', '600', '800', 'DSC01842.JPG');
slides[20] = new Slide('../Photos 2007 Fur_files/DSC01843.jpg', '600', '800', 'DSC01843.JPG');
slides[21] = new Slide('../Photos 2007 Fur_files/DSC01845.jpg', '800', '600', 'Niels fossil hunting on Fur');
slides[22] = new Slide('../Photos 2007 Fur_files/DSC01846.jpg', '600', '800', 'Fur');
slides[23] = new Slide('../Photos 2007 Fur_files/DSC01847.jpg', '600', '800', 'Niels fossil hunting on Fur');
slides[24] = new Slide('../Photos 2007 Fur_files/DSC01848.jpg', '600', '800', 'Niels fossil hunting on Fur');
slides[25] = new Slide('../Photos 2007 Fur_files/DSC01849.jpg', '600', '800', 'Niels fossil hunting on Fur');
slides[26] = new Slide('../Photos 2007 Fur_files/DSC01850.jpg', '600', '800', 'Fur');
isPureISOLatin1 = true;
contentEncodingConstant = 4;
feedbackURL = "TODO";
showFeedbackButton = false;
feedbackEnabled = true;

function NBmouseover(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "hidden";
        rollover.style.visibility = "visible";
    }
    return true;
}

function NBmouseout(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "visible";
        rollover.style.visibility = "hidden";
    }
    return true;
}

var smallTransparentGif = "";
function fixupIEPNG(strImageID, transparentGif) 
{
    smallTransparentGif = transparentGif;
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        var img = document.getElementById(strImageID);
        if (img)
        {
            var src = img.src;
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
            img.src = transparentGif;
            img.attachEvent("onpropertychange", imgPropertyChanged);
        }
    }
}

var windowsInternetExplorer = false;
var browserVersion = 0;
function detectBrowser()
{
    windowsInternetExplorer = false;
    var appVersion = navigator.appVersion;
    if ((appVersion.indexOf("MSIE") != -1) &&
        (appVersion.indexOf("Macintosh") == -1))
    {
        var temp = appVersion.split("MSIE");
        browserVersion = parseFloat(temp[1]);
        windowsInternetExplorer = true;
    }
}

var inImgPropertyChanged = false;
function imgPropertyChanged()
{
    if ((window.event.propertyName == "src") && (! inImgPropertyChanged))
    {
        inImgPropertyChanged = true;
        var el = window.event.srcElement;
        if (el.src != smallTransparentGif)
        {
            el.filters.item(0).src = el.src;
            el.src = smallTransparentGif;
        }
        inImgPropertyChanged = false;
    }
}

function fixupIEPNGBG(oBlock) 
{
    if (oBlock)
    {
        var currentBGImage = oBlock.currentStyle.backgroundImage;
        var currentBGRepeat = oBlock.currentStyle.backgroundRepeat;
        var urlStart = currentBGImage.indexOf('url(');
        var urlEnd = currentBGImage.indexOf(')', urlStart);
        var imageURL = currentBGImage.substring(urlStart + 4, urlEnd);

        if (imageURL.charAt(0) == '"')
        {
            imageURL = imageURL.substring(1);
        }
        
        if (imageURL.charAt(imageURL.length - 1) == '"')
        {
            imageURL = imageURL.substring(0, imageURL.length - 1);
        }

        var overrideRepeat = false;

        var filterStyle =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            imageURL +
            "', sizingMethod='crop');";

        if (RegExp("/C[0-9A-F]{8}.png$").exec(imageURL) != null)
        {
            filterStyle =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                imageURL +
                "', sizingMethod='scale');";

            overrideRepeat = true;
        }

        var backgroundImage = new Image();
        backgroundImage.src = imageURL;
        var tileWidth = backgroundImage.width;
        var tileHeight = backgroundImage.height; 
        
        var blockWidth = 0;
        var blockHeight = 0;
        if (oBlock.style.width)
        {
            blockWidth = parseInt(oBlock.style.width);
        }
        else
        {
            blockWidth = oBlock.offsetWidth;
        }
        if (oBlock.style.height)
        {
            blockHeight = parseInt(oBlock.style.height);
        }
        else
        {
            blockHeight = oBlock.offsetHeight;
        }

        if ((blockWidth == 0) || (blockHeight == 0))
        {
            return;
        }
        
        var wholeRows = 1;
        var wholeCols = 1;
        var extraHeight = 0;
        var extraWidth = 0;
        
        if ((currentBGRepeat.indexOf("no-repeat") != -1) ||
              ((tileWidth == 0) && (tileHeight == 0)) ||
              overrideRepeat)
        {
            tileWidth = blockWidth;
            tileHeight = blockHeight;

        }
        else if ((currentBGRepeat.indexOf("repeat-x") != -1) ||
              (tileHeight == 0))
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            tileHeight = blockHeight;

        }
        else if (currentBGRepeat.indexOf("repeat-y") != -1)
        {
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraHeight = blockHeight - (tileHeight * wholeRows);
            tileWidth = blockWidth;

        }
        else
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            extraHeight = blockHeight - (tileHeight * wholeRows);
        }
        
        var wrappedContent = document.createElement("div");
        wrappedContent.style.position = "relative";
        wrappedContent.style.zIndex = "1";
        wrappedContent.style.left = "0px";
        wrappedContent.style.top = "0px";
        if (!isNaN(parseInt(oBlock.style.width)))
        {
            wrappedContent.style.width = "" + blockWidth + "px";
        }
        if (!isNaN(parseInt(oBlock.style.height)))
        {
            wrappedContent.style.height = "" + blockHeight + "px";
        }
        var pngBGFixIsWrappedContentEmpty = true;
        while (oBlock.hasChildNodes())
        {
            if (oBlock.firstChild.nodeType == 3)
            {
                if (RegExp("^ *$").exec(oBlock.firstChild.data) == null)
                {
                    pngBGFixIsWrappedContentEmpty = false;
                }
            }
            else
            {
                pngBGFixIsWrappedContentEmpty = false;
            }
            wrappedContent.appendChild(oBlock.firstChild);
        }
        if (pngBGFixIsWrappedContentEmpty)
        {
            wrappedContent.style.lineHeight = "0px";
        }
        
        var newMarkup = "";
        for (var currentRow = 0; 
             currentRow < wholeRows; 
             currentRow++)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        
        if (extraHeight != 0)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        oBlock.innerHTML = newMarkup;

        oBlock.appendChild(wrappedContent);
        oBlock.style.background= "";
    }
}

function fixupAllIEPNGBGs()
{
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        try
        {
            var oDivNodes = document.getElementsByTagName('DIV');
            for (var iIndex=0; iIndex<oDivNodes.length; iIndex++)
            {
                var oNode = oDivNodes.item(iIndex);
                if (oNode.currentStyle &&
                    oNode.currentStyle.backgroundImage &&
                    (oNode.currentStyle.backgroundImage.indexOf('url(') != -1) &&
                    (oNode.currentStyle.backgroundImage.indexOf('.png")') != -1))
                {
                    fixupIEPNGBG(oNode);
                }
            }
        }
        catch (e)
        {
        }
    }
}

function onPageLoad()
{
    detectBrowser();
    fixupIEPNG("id1", "Photos 2007 Fur_files/transparent.gif");
    fixupAllIEPNGBGs();
    fixupIEPNG("id2", "Photos 2007 Fur_files/transparent.gif");
    fixupIEPNG("id3", "Photos 2007 Fur_files/transparent.gif");
    return true;
}

