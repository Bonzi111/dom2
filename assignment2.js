var count=0;

function getvalue()
{
    if(count==0){
    var div=document.createElement("div");
    var date=document.createElement("input");
    date.type="date";
    date.value="time";
    date.id="calendar";
    var text=document.createElement("input");
    text.type="text";
    text.id="descript";
    var removeRowButton = document.createElement("BUTTON");
    removeRowButton.setAttribute("class","glyphicon glyphicon-remove");
    removeRowButton.onclick = function() 
    {
        getvalue(); 
    }
    var selectRowButton = document.createElement("BUTTON");
    selectRowButton.setAttribute("class","glyphicon glyphicon-ok");
    selectRowButton.onclick = function() 
    {
        TODO();
    }
    div.appendChild(date);
    div.appendChild(text);
    div.appendChild(removeRowButton);
    div.appendChild(selectRowButton);
    document.body.appendChild(div);
    count++
}
}

var json=[
    {
        "time":"2020-11-12",
        "description":"Hi"
    }
]   
function TODO()
{
  
    var a=document.getElementById("calendar").value;
    var b=document.getElementById("descript").value;
    if(a == "" || b == "")
    {
        alert("not valid fields");   
    }
    else
      {
    json.push({"time":a,"description":b})
    createTable();
      }
}
function createTable()
{
    var table = document.createElement('table');
    table.setAttribute('id', 'dynamicTable');
    var header = Object.keys(json[0]);
    var tr = document.createElement('tr');
    for (var i = 0; i < header.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = header[i];
        th.setAttribute('class', 'tableClass1');
        th.setAttribute('id', header[i])
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (var i = 0; i < json.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < header.length; j++) {
            var td = document.createElement('td');
            td.innerHTML = json[i][header[j]];
            td.setAttribute('class', 'tableClass');
            tr.appendChild(td);
        }
        table.appendChild(tr);
        var removeButton = document.createElement("BUTTON");
        tr.appendChild(removeButton);
        removeButton.setAttribute("class","glyphicon glyphicon-remove");
        removeButton.onclick = function() 
        {
            document.getElementById("dynamicTable").deleteRow(json.length);
        }
        table.setAttribute("border","2");
    }
    document.body.appendChild(table);
    addEventsToColumns();
}
function addEventsToColumns() {
    var header = Object.keys(json[0]);
    for (var i = 0; i < header.length; i++) {
        document.getElementById(header[i]).addEventListener('click', function (event) {
           console.log(event);
            sortTable(event.target.innerText)
        })
    }
}
let flag = true;
function sortTable(param) {
    json.sort(compare);
    function compare(a, b) {
        if (a[param] > b[param] && flag)
            {
                console.log(json)
                return 1;
            }
        else
        {
            console.log(json)
            return -1;
        }
    }
    flag = !flag;
}