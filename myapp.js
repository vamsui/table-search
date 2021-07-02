let t=document.getElementsByClassName('table-name')[0];
let str=document.getElementsByClassName('search')[0];
let res=document.getElementsByClassName('result')[0];

function Fun()
{
    let rows=t.rows;
    res.innerHTML=`hello <em>${str.value}</em>`;
    for(let i=0;i<rows.length;i++)
    {
        let row=rows[i];
        for(let j=0;j<row.cells.length;j++)
        {
            let cell=row.cells[j];
            cell.innerHTML=cell.innerText.replaceAll(str.value,`<span class="highlight">${str.value}</span>`)
            
        }
    }
}