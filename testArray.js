const axios=require('axios');

// const getData= async () =>{
//     try {
//         const res = await axios.get("https://7z4mgi9veg.execute-api.us-east-1.amazonaws.com/VMS/rules/get");
//         console.log(res.data);
//     const data= res.data.body
//     const newData= {
//         weekDaySession:data[0].session_rules,
//         weekEndSession:data[0].session_rules,
//         maxVisitor:data[0].maximum_visitor.max_visitor,
//         maxVisitorStatus:data[0].maximum_visitor.max_visitor_status,
//         maxTime:data[0].maximum_visitor.max_time,
//         maxTimeStatus:data[0].maximum_visitor.max_time_status
//     }
//     console.log(newData);
//     } catch (error) {
//         console.error(error);
//     }
// }
const getData= async () =>{
    try {
        const res = await axios.get("https://7z4mgi9veg.execute-api.us-east-1.amazonaws.com/VMS/visitschedule/get/eeb39ea0e4135bd8cb0bc7cd075c3739");
    const data= res.data.body
    console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();

// console.log((new Date("2020-08-20")).getDay());