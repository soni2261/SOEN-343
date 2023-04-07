function selectOne() {
    var select = document.getElementById('age');
    select.options[0] = new Option();
    select.options[0].id="age-select"
    var ageselect = document.getElementById("age-select");
    ageselect.setAttribute("hidden", true);
    ageselect.setAttribute("disabled", false);
    ageselect.setAttribute("selected", false);
    for (var i=10; i<=100; i++) {
        select.options[select.options.length] = new Option(i, i);
    }
}
selectOne();