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
        alert("TODO list no added");
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
  
    var date=document.getElementById("calendar").value;
    var description=document.getElementById("descript").value;
    if(date == "" || description == "")
    {
        alert("not valid fields");   
    }
    else
      {
    json.push({"time":date,"description":description})
    createTable();
      }
}
function createTable()
{
    let previousdata=document.getElementById("dynamicTable");
    if(!!previousdata){
        previousdata.remove();
    }
    var table = document.createElement('table');
    table.setAttribute('id', 'dynamicTable');
    var header = Object.keys(json[0]);
    var tr = document.createElement('tr');
    for (var index = 0; index < header.length; index++) {
        var th = document.createElement('th');
        th.innerHTML = header[index];
        th.setAttribute('class', 'tableClass1');
        th.setAttribute('id', header[index])
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (var index = 0; index < json.length; index++) {
        var tr = document.createElement('tr');
        for (var temp = 0; temp < header.length; temp++) {
            var td = document.createElement('td');
            td.innerHTML = json[index][header[temp]];
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
    if(header=="time")
    {
        document.getElementById("time").addEventListener('click',function(event){
            console.log(event);
            dsortTable(event.target.innerText)
        })
    }
    else{
        document.getElementById("description").addEventListener('click',function(event){
            console.log(event);
            tsortTable(event.target.innerText)
        })
    }
}
let flag = true;
function tsortTable(param) {
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
function dsortTable(param)
{
    
}
