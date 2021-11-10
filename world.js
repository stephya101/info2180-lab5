window.addEventListener('load', ()=>{

    let sanItz;

    let displayRes = document.querySelector("#result");
    document.querySelector("#lookup").addEventListener("click", (event)=>{
        event.preventDefault();
        let sanValue = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        sanItz = `http://localhost/info2180-lab5/world.php?country= ${sanValue}`;
        lookUp();

    });

    document.querySelector("#lookupcity").addEventListener("click", (event)=>{
        event.preventDefault();
        let sanValue = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        sanItz = `http://localhost/info2180-lab5/world.php?country= ${sanValue}&context=cities`;
        lookUp();
    });

    function lookUp (){
        fetch(sanItz, {method : 'GET'})
        .then(feedBk => feedBk.text())
        .then(tabData => {
            displayRes.innerHTML = '';
            displayRes.innerHTML = tabData;
        })
    }

    
});