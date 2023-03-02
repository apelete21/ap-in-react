import React from 'react'
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { icons } from '../service/icons'
import { jobdata } from '../service/jobdata'

export default function JobDetails() {
    return (
        <>
            <header>
                <div class="fluid-wrapper main-navigation bg_primary">
                    <MenuNav logoImage={icons.lgLight} linkView="lightlink" />
                    <MenuButtonDark />
                    <div class="offset-canva job-main-title">
                        <h1 class="section--hero__title php_job">
                            {jobdata.title}
                        </h1>

                        <div class="job_detail__banner">

                            <div class="job_level_block">
                                <div class="level_title">
                                    Seniority Level
                                </div>
                                <div class="level_year">
                                    {jobdata.level}
                                </div>
                            </div>
                            <div class="job_time_block">
                                <div class="time_title">
                                    Employment type
                                </div>
                                <div class="job_time">
                                    {jobdata.time}
                                </div>
                            </div>

                            <div class="job_validity_block">
                                <div class="val_title">
                                    Validity
                                </div>
                                <div class="val_year">
                                    {jobdata.validity}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>


            {/* <!--===========================
                END OF HOME HERO SECTION
        ===========================--> */}


            {/* <!--===========================
               START OF content SECTION
        ===========================--> */}

            <section class="php-back-intro offset-canva">
                <div class="php_job_description">
                    <div class="role_overview_section">
                        <h2 class="overview_title">
                            Background informations
                        </h2>
                        <div class="role_description">
                            <p class="p-18">
                                Appeal of Innovation is a Togolese technology company created in 2021.
                                Specialized in digital services and digital transformation, Appeal of Innovation works with international clients and partners making it a bilingual company.

                                In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager.

                            </p>
                        </div>
                    </div>
                    <div class="job_tasks_section">
                        <h2 class="task_title">
                            Duties and responsabilities

                        </h2>
                        <p class="p-18">
                            The incumbent is responsible for
                        </p>

                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    Providing quality assistance to management
                                </li>

                                <li class="task_">
                                    <span class="square"></span>
                                    Providing administrative and organizational services for the management
                                </li>

                                <li class="task_">
                                    <span class="square"></span>
                                    independently performing administrative and organizational tasks of the Office
                                </li>

                            </ul>

                            <p class="p-18">
                                Within this framework, the incumbent has the following responsibilities:
                            </p>
                        </div>



                        <h4 class="h4">
                            1. Organization of the Secretariat
                        </h4>

                        <p class="p-18">The incumbent :</p>

                        <div class="tasks_list_section">
                            <ul class="tasks_list">

                                <li class="task_">
                                    <span class="square"></span>
                                    organizes and coordinates the Director's schedule;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    welcomes and introduces visitors
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    answers the telephone, checks calls, transfers or handles them;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    ensures the management of incoming and outgoing mail of the department; and organizes the processing according to the priorities and deadlines defined;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Maintains and follows up on official correspondence;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    ensures the transmission and redistribution of the director's initials;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    ensures the necessary responses to management correspondence;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    prepares and organizes information materials for meetings;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    prepares the minutes of the meetings
                                    meetings;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    treats information in a confidential manner, particularly in the areas of
                                    in the areas of human resources and finance;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    ensures the exchange of information between GIZ, partners and other
                                    and other institutions;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Photocopies and scans documents as required;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Ensures compliance with the guidelines in the area of digitization
                                    and actively supports the management in the implementation of the
                                    digital office of GIZ.
                                </li>
                            </ul>
                        </div>

                        <h4 class="h4">
                            2. Logistics management
                        </h4>
                        <p class="p-18"> The incumbent will:</p>

                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    supports the organization of executive meetings;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    ensures the listing and follow-up of upcoming meetings/events of the
                                    management;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    supports the organization of missions, visits and trips of the
                                    and visitors from headquarters to the office;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Ensures that the directorate's computers and software are operational
                                    operational;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    is responsible for the administrative and logistical organization of office
                                    office activities (meetings, workshops, etc...)
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    coordinates the management of the office's internal events
                                    (meetings, conferences, coffee breaks, booking of meeting rooms).
                                    meeting rooms).
                                </li>
                            </ul>
                        </div>

                        <h4 class="h4">
                            3. Administrative tasks
                        </h4>
                        <p class="p-18">The incumbent :</p>
                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    ensures good communication and information flow
                                    within the office and between the office and projects/programs;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Monitors the availability of supplies and inventory, and makes
                                    supplies in accordance with management's directives
                                    management;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Ensures physical and electronic filing of documents and information
                                    and information on GIZ digital platforms (such as DMS, MS Telegraph)
                                    (such as DMS, MS Teams);
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    translates and prepares documents (letters, email communication)
                                    in French and English;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    assumes responsibility for the distribution and receipt of documents or packages
                                    documents or packages to and from post offices, government
                                    post offices, government offices, embassies, etc;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    is responsible for the distribution of memos.
                                </li>
                            </ul>
                        </div>
                        <h4 class="h4">
                            4. Other duties
                        </h4>
                        <p class="p-18">The incumbent :</p>
                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    Maintains contact lists of GIZ collaborators in Togo as well as partners
                                    GIZ staff in Togo as well as partners (TFPs, ministries, NGOs, with names, addresses and telephone numbers.
                                    etc.) with names, addresses and telephone numbers;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    facilitates the arrival/departure of new expatriate colleagues and their families
                                    and their families in conjunction with the relevant departments in the Office;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Performs or participates in other activities and tasks as directed by
                                    other activities and tasks as directed by his/her supervisor.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="job_tasks_section">
                        <h2 class="task_title">
                            Profile and Qualifications
                        </h2><div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    University degree BAC+3/4 in Executive Secretary or in a field of
                                    a field of management science;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Proof of a good level of language skills in French and in English by a
                                    certificate of language proficiency (minimum level C1 for French and minimum level B2 for and minimum level B2 for English).
                                </li>

                            </ul>
                        </div>
                        <h4 class="h4">
                            Professional experience
                        </h4>
                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    At least 5 years experience as an Executive Assistant or Administrative Assistant or any other similar position related to the position;

                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Experience in an international organization would be an asset.
                                </li>

                            </ul>
                        </div>

                        <h4 class="h4">
                            Other knowledge & additional skills
                        </h4>
                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    Good working knowledge of the use of information and communication technologies (related software as well as telephone, fax, e-mail, Internet) and computer applications (such as MS Office);

                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Convincing presentation as a service provider and manager;
                                </li>

                                <li class="task_">
                                    <span class="square"></span>
                                    Demonstrate responsiveness, discretion and confidentiality;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Have a perfect command of the French language (written and oral), with a good ability to write notes, reports and summaries;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Organizational, communication and listening skills;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Ability to work effectively in an emergency and in a multicultural environment;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Demonstrate an aptitude for teamwork;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Ability to adapt quickly to new situations and external contacts;
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Sense of appropriate data handling (confidentiality, data protection).
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="job_tasks_section">
                        <h2 class="task_title">
                            Duration of the contract and place of employment
                        </h2><div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    Duration of contract: Fixed-term contract

                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Place of employment : <b>Lomé</b>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div class="job_tasks_section">
                        <h2 class="task_title">
                            Submission Guideline:
                        </h2><div class="tasks_list_section">
                            <p class="p-18">
                                We invite you to send your application (with subject line: NoV N°100/2023 by march, 2023 at the latest by e-mail to the following address: <a href="mailto:hello@appealofinnovation.com">hello@appealofinnovation.com</a>, <a href="mailto:appealofinnovation@gmail.com">appealofinnovation@gmail.com</a> . The application file in this mandatory format must include a cover letter and a CV in French or English with 3 references to contact, all in one document (in WORD or PDF file). The application must be named by the applicant's name. Female applicants are strongly encouraged to apply.
                                Only short-listed candidates will be contacted.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
