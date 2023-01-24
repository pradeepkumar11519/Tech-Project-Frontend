import React from 'react'

export default function Table({Contests}) {
    return (
        <div>
            <section className="grid-cols-4 grid my-20 w-full mx-auto">
                <div className="w-full col-span-3 mx-auto">
                    <table className="border-collapse  rounded-full">
                        <tr className="bg-[#F2A790]">
                            <th className="border-[1px] border-transparent p-2 rounded-tl-md">SL.No.</th>
                            <th className="border-[1px] border-transparent p-2">competetion name</th>
                            <th className="border-[1px] border-transparent p-2">website</th>
                            <th className="border-[1px] border-transparent p-2">start time</th>
                            <th className="border-[1px] border-transparent p-2">Duration</th>
                            <th className="border-[1px] border-transparent p-2 rounded-tr-md">status</th>
                        </tr>
                        <tr className="bg-slate-100">
                            <td className="border-[1px] border-transparent p-2">1.</td>
                            <td className="border-[1px] border-transparent p-2">Good Bye 2022: 2023 is NEAR</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces</td>
                            <td className="border-[1px] border-transparent p-2">Dec/30/2022 17:35</td>
                            <td className="border-[1px] border-transparent p-2">02:30</td>
                            <td className="border-[1px] border-transparent p-2">Ongoing</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border-[1px] border-transparent p-2">2.</td>
                            <td className="border-[1px] border-transparent p-2">Hello 2023</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces</td>
                            <td className="border-[1px] border-transparent p-2">Jan/03/2023 17:35</td>
                            <td className="border-[1px] border-transparent p-2">02:30</td>
                            <td className="border-[1px] border-transparent p-2">Ongoing</td>
                        </tr>
                        <tr className="bg-slate-100">
                            <td className="border-[1px] border-transparent p-2">3.</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces Round #842 (Div. 2)</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces</td>
                            <td className="border-[1px] border-transparent p-2">Jan/05/2023 17:35</td>
                            <td className="border-[1px] border-transparent p-2">02:00</td>
                            <td className="border-[1px] border-transparent p-2">Ongoing</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border-[1px] border-transparent p-2">4.</td>
                            <td className="border-[1px] border-transparent p-2">Hello 2023</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces</td>
                            <td className="border-[1px] border-transparent p-2">Jan/03/2023 17:35</td>
                            <td className="border-[1px] border-transparent p-2">02:30</td>
                            <td className="border-[1px] border-transparent p-2">Ongoing</td>
                        </tr>
                        <tr className="bg-slate-100">
                            <td className="border-[1px] border-transparent p-2">5.</td>
                            <td className="border-[1px] border-transparent p-2">Good Bye 2022: 2023 is NEAR</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces</td>
                            <td className="border-[1px] border-transparent p-2">Dec/30/2022 17:35</td>
                            <td className="border-[1px] border-transparent p-2">02:30</td>
                            <td className="border-[1px] border-transparent p-2">Ongoing</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border-[1px] border-transparent p-2 rounded-bl-md">6.</td>
                            <td className="border-[1px] border-transparent p-2">Hello 2023</td>
                            <td className="border-[1px] border-transparent p-2">Codeforces</td>
                            <td className="border-[1px] border-transparent p-2">Jan/03/2023 17:35</td>
                            <td className="border-[1px] border-transparent p-2">02:30</td>
                            <td className="border-[1px] border-transparent p-2 rounded-br-md">Ongoing</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    )
}
