var ZohoDeskEditor_Tooltip_EditorToolsList=["bold","italic","underline","forecolor","heading","fontSize","alignoptions","listoptions","insertoptions"];
var chrome_addons_inner_text = "";
var lastSelectedColorOptionNode;
var LastFocusedBC = "white";

function callback(editorObj) {
    var deleteIt=true;
	editor = editorObj;
	for(i in editor.toolbarobject){
		for(j=0 ; j<ZohoDeskEditor_Tooltip_EditorToolsList.length ; j++){
			if(i==ZohoDeskEditor_Tooltip_EditorToolsList[j]){
				deleteIt=false;
			}
		}
		if(deleteIt){
			editor.toolbarobject[i].parentElement.parentElement.removeChild(editor.toolbarobject[i].parentElement);
		}
		deleteIt=true;
	}
}

function valueGeter() {
    chrome_addons_inner_text = editor.getContent()
    window.postMessage({ type:"Editter_InnerContent_Changed" , text:chrome_addons_inner_text },"*");
}

function ZohoDesk_Editor_loadPage(cssPath,jsPath) {
    if(document.getElementById("editerToolsContainer").childElementCount ===0){
        ZohoDeskEditor_Init.init(cssPath,jsPath);
        ZohoDeskEditor.create({
            id: "editerToolsContainer",
            content: chrome_addons_inner_text,
            callback: callback,
            contentChanged: valueGeter
        });
        eventBinder();
    }
}

function functionLoaderCheck(){
    if(ZohoDeskEditor_Init.init && ZohoDeskEditor.create){
        ZohoDesk_Editor_loadPage('https://localcss.zohostatic.com/support/1347659/css','https://localjs.zohostatic.com/support/1316166');
    }
}




function tooltipBackgroundColourChanger(color) {
    var a = document.getElementsByClassName("KB_Editor_iframe")[0];
    a.contentDocument.body.style.backgroundColor = color;
    document.getElementById("chromeAdd-onEditAddonButtonContainer").style.background = color;
}

var colors = document.getElementsByClassName("zohodesk-Tooltip-clr-box");

function eventBinder() {
    for (i = 0; i < colors.length; i++) {
        ele = colors[i];
        ele.addEventListener("click", function(e) {
            separateColorHighliter(e)
        })
    }
    document.getElementById("ChromeAddonManualBackgroundColorInput").addEventListener("input", function(e) {
        var bc = e.srcElement.value;
        if (bc != "") {
            try {
                if(isNaN(bc)){
                    tooltipBackgroundColourChanger(bc);
                }
                if (LastFocusedBC != document.getElementById("chromeAdd-onEditAddonButtonContainer").style.backgroundColor) {
                    lastSelectedColorOptionNode.style.borderColor = "";
                }
            } catch (error) {
                console.log(error);
            }
        }
    });
}

function separateColorHighliter(e) {
    if (e.srcElement.firstElementChild != null) {
        childEle = e.srcElement.firstElementChild;
        parentEle = childEle.parentNode;
    } else {
        childEle = e.target;
        parentEle = childEle.parentNode;
    }
    var bc = window.getComputedStyle(childEle, null).getPropertyValue('background-color');
    parentEle.style.borderColor = bc;
    if (lastSelectedColorOptionNode != null) {
        if (lastSelectedColorOptionNode != parentEle) {
            lastSelectedColorOptionNode.style.borderColor = "";
        }
    }
    tooltipBackgroundColourChanger(bc);
    LastFocusedBC = bc;
    lastSelectedColorOptionNode = parentEle;
}

    
