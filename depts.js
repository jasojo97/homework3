const or1_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: [] },
            {name: 'accounting receivable', children: [] },
        ],
    },

    {
        name: 'finance',
        children: [],
    }
]


const org2_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: [] },
            {
                name: 'accounting receivable',
                children: [{name: 'cash', children: []}, {name: 'check', children: [] }],            
            },
        ],
    },

    {
        name: 'finance',

        children:[{name: 'investment', children: [] }],
    },
]


//Recursion program
function PrintDepts(depts)
{
   

    
    
        for(let index = 0; index<depts.length; index++)
        {
            if(depts[index].children && depts[index].children.constructor === Array && depts[index].children.length === 0)
            {
                console.log(depts[index].name);       
            }
           

            else
            {
                 
                console.log(depts[index].name);
                PrintDepts(depts[index].children);

                
            }
        }
    
}

console.log(PrintDepts(or1_depts));