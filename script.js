document.addEventListener('DOMContentLoaded', function () {
    let myButton = document.querySelector(".cta button");
    myButton.addEventListener('click', function () {
        if (myButton.textContent === "Get in touch")
         myButton.textContent = "Contacting...";
        else
         myButton.textContent = "Get in touch";
    });
 });

 <script type="text/javascript">
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '676925b0f6a4fb453656cf8b' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>