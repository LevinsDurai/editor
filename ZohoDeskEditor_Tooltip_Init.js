function ZohoDeskEditor_TooltipInit() {}

ZohoDeskEditor_TooltipInit.init = function( cssPath , jsPath ,csrfParamName, csrfToken, hookToOrganize) {
    ZohoDeskEditor_TooltipInit.language = "en";
    ZohoDeskEditor_TooltipInit.useSameDomain = true;
    ZohoDeskEditor_TooltipInit.needplaintext = true;
    ZohoDeskEditor_TooltipInit.editorCSS = true;
    ZohoDeskEditor_TooltipInit.inlineQuotes = true;
    ZohoDeskEditor_TooltipInit.csrfCookieVal = csrfToken;
    ZohoDeskEditor_TooltipInit.csrfParamVal = csrfParamName;
    ZohoDeskEditor_TooltipInit.modeChange = undefined;
    ZohoDeskEditor_TooltipInit.spellcheckURL = 'lt.zoho.com';
    ZohoDeskEditor_TooltipInit.domain = document.domain;
    ZohoDeskEditor_TooltipInit.tabKeyHandling = true;
    ZohoDeskEditor_TooltipInit.needEditorFocus = true;
    ZohoDeskEditor_TooltipInit.removeInsertOptions = false;
    ZohoDeskEditor_TooltipInit.defaultFontSize = "10";
    ZohoDeskEditor_TooltipInit.defaultFontFamily = "Verdana,arial,Helvetica,sans-serif";
    ZohoDeskEditor_TooltipInit.contextVal = "support";
    ZohoDeskEditor_TooltipInit.maxiconpath = 3;
    ZohoDeskEditor_TooltipInit.dropDownTopPadding = 11;
    ZohoDeskEditor_TooltipInit.dropDownLeftPadding = 5;
    ZohoDeskEditor_TooltipInit.slidebarClass = "KB_Editor_DropDown_Slidebar";
    ZohoDeskEditor_TooltipInit.origin = window.location.origin;
    ZohoDeskEditor_TooltipInit.cssPath = cssPath;
    ZohoDeskEditor_TooltipInit.jsPath = jsPath;
    var agt = navigator.userAgent.toLowerCase();
    ZohoDeskEditor_TooltipInit.is_ie = (agt.indexOf("ie") !== -1);
    ZohoDeskEditor_TooltipInit.is_safari = (agt.indexOf("safari") !== -1);
    ZohoDeskEditor_TooltipInit.is_opera = (agt.indexOf("opera") !== -1);
    ZohoDeskEditor_TooltipInit.is_mac = (agt.indexOf("mac") !== -1);
    ZohoDeskEditor_TooltipInit.loading = true;
    if(document.getElementsByClassName("zohoDesk_toolTipEditor_css").length===0){
        ZohoDeskEditor_TooltipInit.loadURL(ZohoDeskEditor_TooltipInit.cssPath+"/ZohoDeskEditorTools.min.css", "css", "ZohoDeskCss");
    }

    ZohoDeskEditor_TooltipInit.toolbarOrder = [
        ["bold", "Bold (Ctrl+B)", "KBEditor-txtbold"],
        ["italic", "Italic (Ctrl+I)", "KBEditor-txtitalic"],
        ["underline", "Underline (Ctrl+U)", "KBEditor-txtunderline"],
        ["forecolor", "Font color", "KBEditor-clrpick"],
        /*["backcolor", "Background Color", "KBEditor-bgclr"],*/
        ["heading", "Heading", "KB_Editor_Bdr_div Text_Type"],
        ["fontSize", "Font Size", "KB_Editor_Bdr_div TextSize_Type"],
        ["alignoptions", "Align Text", "KBEditor-align-left"],
        ["listoptions", "List Options", "KBEditor-list-round"],
        
        /*["indentoptions", "Indent Options", "KBEditor-increaseindent"],
        ["attach", "Insert Image", "KBEditor-insertimage"],
        ["removeFormat", "Remove Formatting", "KBEditor-clr"],
        ["articlelink", "Insert Article Link", "KBEditor-linkarticle"],*/
        
        ["insertoptions", "Insert Options", "KB_Editor_Bdr_div Insert_Type"],
        /*["editorexpand", "Editor Expand", "KBEditor-expand"],*/
        ["styletext", "Style Text", "KBEditor-txtbgclr"],
        /*["plaintext", "Plain Text", "KB_Editor_PlainText KB_Editor_FullScreen"]*/
    ];

    ZohoDeskEditor_TooltipInit.heading = [{
            "htm": "Heading 1",
            "datAttr": "h1"
        },
        {
            "htm": "Heading 2",
            "datAttr": "h2"
        },
        {
            "htm": "Heading 3",
            "datAttr": "h3"
        },
        {
            "htm": "Normal",
            "datAttr": "div"
        }
    ];
    ZohoDeskEditor_TooltipInit.insertoptions = [{
            "htm": "Insert Link",
            "datAttr": "link",
            "iconClass": "KBEditor-insertlink"
        },
        {
            "htm": "Remove Link",
            "datAttr": "unlink",
            "iconClass": "KBEditor-removelink"
        },

        /*  {
              "htm": "Insert HTML",
              "datAttr": "object",
              "iconClass":"KBEditor-embed2"
          },
          {
        "htm" : "Edit HTML",
        "datAttr" : "edithtml",
        "iconClass":"KBEditor-embed2"
          }, 
          {
           "htm": "Insert Table",
              "datAttr": "table",
              "iconClass":"KBEditor-inserttable"
          },
          {
              "htm": "Insert Horizontal Rule",
              "datAttr": "inserthorizontalrule",
              "iconClass":"KBEditor-hr"
          },
          {
              "htm": "Insert Code",
              "datAttr": "code",
              "iconClass":"KBEditor-code"
          }
	*/
    ];
    ZohoDeskEditor_TooltipInit.align = [{
            "htm": "Align Left",
            "datAttr": "justifyleft",
            "iconClass": "KBEditor-align-left"
        },
        {
            "htm": "Align Right",
            "datAttr": "justifyright",
            "iconClass": "KBEditor-align-right"
        },
        {
            "htm": "Align Justify",
            "datAttr": "justifyfull",
            "iconClass": "KBEditor-align-justify"
        },
        {
            "htm": "Align Center",
            "datAttr": "justifycenter",
            "iconClass": "KBEditor-align-center"
        },
        {
            "htm": "RTL",
            "datAttr": "rtl",
            "iconClass": "KBEditor-align-right"
        },
    ];
    ZohoDeskEditor_TooltipInit.list = [{
            "htm": "Bullets",
            "datAttr": "insertunorderedlist",
            "iconClass": "KBEditor-list-round"
        },
        {
            "htm": "Numbering",
            "datAttr": "insertorderedlist",
            "iconClass": "KBEditor-list-number"
        }
    ];

    ZohoDeskEditor_TooltipInit.indent = [{
            "htm": "Increase Indent",
            "datAttr": "indent",
            "iconClass": "KBEditor-increaseindent"
        },
        {
            "htm": "Decrease Indent",
            "datAttr": "outdent",
            "iconClass": "KBEditor-increaseindent"
        }
    ];

    ZohoDeskEditor_TooltipInit.others = [{
            "htm": "Check Spelling",
            "datAttr": "spellcheck"
        },
        {
            "htm": "Plain Text Mode",
            "datAttr": "switchmode"
        }
    ];

    ZohoDeskEditor_TooltipInit.attachDrop = [{
            "clk": function(editor) {
                editor.uploadImage("load");
                if (ZohoDeskEditor_TooltipInit.needEditorStats) {
                    editor.updateCount("image");
                }
            },
            "htm": "Upload",
            "iconClass": "KBEditor-upload"
        },
        {
            "clk": function(editor) {
                editor.uploadImage("url");
                if (ZohoDeskEditor_TooltipInit.needEditorStats) {
                    editor.updateCount("image");
                }
            },
            "htm": "URL",
            "iconClass": "KBEditor-sphere"
        }
    ];

    ZohoDeskEditor_TooltipInit.fontSize = [{
            "htm": "8",
            "datAttr": "1"
        },
        {
            "htm": "10",
            "datAttr": "2"
        },
        {
            "htm": "12",
            "datAttr": "3"
        },
        {
            "htm": "14",
            "datAttr": "4"
        },
        {
            "htm": "18",
            "datAttr": "5"
        },
        {
            "htm": "24",
            "datAttr": "6"
        },
        {
            "htm": "36",
            "datAttr": "7"
        }
    ];
    var agt = navigator.userAgent.toLowerCase();
    ZohoDeskEditor_TooltipInit.is_ie = (agt.indexOf("ie") !== -1);
    ZohoDeskEditor_TooltipInit.is_safari = (agt.indexOf("safari") !== -1);
    ZohoDeskEditor_TooltipInit.is_opera = (agt.indexOf("opera") !== -1);
    ZohoDeskEditor_TooltipInit.is_mac = (agt.indexOf("mac") !== -1);
    ZohoDeskEditor_TooltipInit.loading = true;
};
ZohoDeskEditor_TooltipInit.loadURL = function(URL, type ,id) {
    var css,
        _script,
        _document = document;

    if(id && _document.getElementById(id)){
        return;
    }
    if (type === "css") {
        css = _document.createElement("link");
        css.type = 'text/css';
        css.rel = 'stylesheet';
        css.className="zohoDesk_toolTipEditor_css";
        css.href = URL;
        _document.getElementsByTagName("head")[0].appendChild(css);
    } else if (type === "js") {
        _script = _document.createElement("script");
        _script.type = "text/javascript";
        _script.src = URL;
        _document.getElementsByTagName("head")[0].appendChild(_script);
    }
};

//console.log("zohodesk_init file is loaded......");
// global.ZohoDeskEditor_TooltipInit = ZohoDeskEditor_TooltipInit;
