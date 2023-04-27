
let myLeads = []

let deleteButton = document.getElementById("delete-btn")
let saveButton = document.getElementById("save-btn")
let unOrdList = document.getElementById("un-list")
let currrentTab = document.getElementById("current-tab-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads",myLeads))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



currrentTab.addEventListener("click",function(){

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        render(myLeads)


    });

})

saveButton.addEventListener("click",function(){
    let myInput = document.getElementById("inp-field").value

    myLeads.push(myInput)
    console.log(myLeads)
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))

    render()


})

deleteButton.addEventListener("dblclick",function(){
    localStorage.clear()
    unOrdList.innerHTML = ""
    myLeads=[]
    console.log("dbclicked")
})




function render(){

    let listItems = ""
    console.log(myLeads)

    for(let i = 0 ; i < myLeads.length; i++){
         listItems += `<a href="${myLeads[i]}" target="_blank"><li> ${myLeads[i]} </li></a>`
    }

    unOrdList.innerHTML = listItems
}