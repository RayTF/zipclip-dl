// zipclip-dl by RayTF (Based on Subrocks-DL by Literal Line)
// RayTheFox.PW
// zipclip by Carly // 608

var SUBROCKS_DL = (function () {
  var dom = {
    urlField: document.getElementById('urlField'),
    output: document.getElementById('dlOutput'),
    videoPreview: document.getElementById('videoPreview'),
    videoDownload: document.getElementById('videoDownload')
  };

  var fetchVideo = function(e) {
    var id = dom.urlField.value.split('https://zipclip.pw/watch?v=')[1];
    dom.urlField.value = '';
    if (!id) { alert('Please input a valid URL!'); return false; }

    var url = 'https://zipclip.pw/uploads/' + id + '.mp4';
    dom.output.style.display = 'inline-block';
    dom.videoPreview.src = dom.videoDownload.href = url;

    console.log('fetched video with id ' + url);
    return false;
  };

  return {
    fetchVideo: fetchVideo
  };
})();
