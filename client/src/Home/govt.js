import React from 'react';
import NavBar from './navbar';
import './styles.css';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <h1>Benefits for Specially Disabled People in India</h1>
    <ul>
        <li>
            <span class="uid">Disability Pension:</span> Financial assistance is provided through schemes like the Indira Gandhi National Disability Pension Scheme (IGNDPS) to disabled individuals below the poverty line.
        </li>
        <li>
            <span class="uid">Educational Scholarships:</span> Scholarships and fellowships for students with disabilities to support their education at different levels, including primary, secondary, and higher education.
        </li>
        <li>
            <span class="uid">Subsidized Loans:</span> The National Handicapped Finance and Development Corporation (NHFDC) offers subsidized loans to disabled individuals for self-employment ventures.
        </li>
        <li>
            <span class="uid">Employment Reservation:</span> Government jobs and public sector undertakings reserve a certain percentage of positions for persons with disabilities.
        </li>
        <li>
            <span class="uid">Skill Development Programs:</span> Specialized training programs are provided to enhance the skills of disabled individuals to improve their employability.
        </li>
        <li>
            <span class="uid">Tax Benefits:</span> Disabled individuals and their guardians can avail of tax deductions under various sections of the Income Tax Act.
        </li>
        <li>
            <span class="uid">Transport Concessions:</span> Concessional fares in public transport systems, including railways and airlines.
        </li>
        <li>
            <span class="uid">Assistance for Aids and Appliances:</span> The Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances (ADIP) Scheme provides aids and appliances at subsidized rates.
        </li>
        <li>
            <span class="uid">Accessible Infrastructure:</span> The Accessible India Campaign (Sugamya Bharat Abhiyan) aims to make public buildings, transport systems, and information and communication technology accessible to disabled individuals.
        </li>
        <li>
            <span class="uid">Rehabilitation and Support Services:</span> The Deendayal Disabled Rehabilitation Scheme (DDRS) supports NGOs and other organizations providing rehabilitation services.
        </li>
        <li>
            <span class="uid">Legal Rights and Protection:</span> The Rights of Persons with Disabilities Act, 2016, ensures equal opportunities, protection, and participation in society for disabled individuals.
        </li>
        <li>
            <span class="uid">Health and Medical Facilities:</span> Free or subsidized medical facilities, including surgeries and therapies, through government hospitals and health schemes.
        </li>
    </ul>
        </div>
    );
}

export default HomePage;
