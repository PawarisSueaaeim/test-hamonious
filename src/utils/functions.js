export const calculate = (data) => {
    const projectLeadPerPrice = {
        sun: 150,
        mon: 100,
        tue: 100,
        wed: 100,
        thu: 100,
        fri: 100,
        sat: 120,
    }
    const employeePerPrice = {
        sun: 100,
        mon: 40,
        tue: 40,
        wed: 40,
        thu: 40,
        fri: 40,
        sat: 60,
    };

    return data.map(person => {
        const rateTable = person.position === "Project Lead" ? projectLeadPerPrice : employeePerPrice;

        const totalSalary = person.workHr.reduce((sum, work) => {
            const day = Object.values(work)[0];
            const hours = work.hr;
            return sum + (rateTable[day] * hours);
        }, 0);

        return {
            name: person.name,
            position: person.position,
            totalSalary
        };
    });
};