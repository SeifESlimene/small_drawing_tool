// Image editor

var settings = {
  imgName: "Image",
  hideLoadBtn: false,
};

var imageEditor = new tui.ImageEditor("#tui-image-editor-container", {
  includeUI: {
    loadImage: {
      path:
        "http://nhn.github.io/tui.image-editor/latest/examples/img/sampleImage2.png",
      name: "SampleImage",
    },
    menu: ["text","draw"],
    theme: blackTheme, // or whiteTheme
    initMenu: "text",
    menuBarPosition: "bottom",
  },
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  usageStatistics: false,
});

window.onresize = function () {
  imageEditor.ui.resizeEditor();
};

$(
  ".tui-image-editor-header-buttons .tui-image-editor-download-btn"
).replaceWith('<button class="tui-image-editor-save-btn" >Save</botton>');
$(".tui-image-editor-header-logo").hide();
// $('.tui-image-editor-menu').hide();

// $('.tui-image-editor-header-buttons div:first').hide();
var loadBtn = $(".tui-image-editor-header-buttons div:first");
if (settings.hideLoadBtn) loadBtn.hide();

window.onload = () => {
  imageEditor.addText("SubTitle", {
    styles: {
      fill: "#000",
      fontSize: 100,
      fontWeight: "bold",
      opacity: 1,
      fontStyle: "italic",
      textAlign: "center",
      textDecoration: "underline",
      // text:'test',
      // fontFamily:'Noto+Sans+TC'
      // fontFamily:'Hanna+Sans'
    },
    position: {
      x: 10,
      y: 10,
    },
  });
};
