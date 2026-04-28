  < script >
      function fetchMessage() {
          // ច្ស្របើ JavaScript ច្ែើមប ីទញទ្យិៃែៃ័យពី Spring Boot API 
          fetch('/api/hello')
              .then(response => response.text())
              .then(data => {
                  document.getElementById('title').innerText = data;
              });
      } <
      /script>