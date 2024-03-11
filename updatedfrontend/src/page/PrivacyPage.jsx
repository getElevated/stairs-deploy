import React from 'react'
import AnimationWrapper from '../components/ui/animation'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Wrapper from '../components/Wrapper'
import TextAnimation from '../components/common/textanimation'
const PrivacyPage = () => {
  return (
    <>
    <Navbar/>
      <AnimationWrapper>
            <div className="h-[30vh]  rounded-sm   bg-[url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
                <Wrapper>
                <h1 className="text-4xl lg:text-5xl   text-white font-semibold pb-20 pt-20">
                      <TextAnimation line2="Privacy Policy"/>
                </h1>
                </Wrapper>
            </div>
            <Wrapper>
            {/* <h1 className="text-2xl lg:text-3xl font-poppins   font-semibold pt-10">Privacy Policy</h1> */}
            <p className='sm:text-base text-base mt-2 ml-1 text-gray-600'>This introduction to STAIRS privacy policy underscores their commitment to user privacy.
                It explains the purpose of the policy—to inform users about data collection, usage, and dissemination
                practices. By enrolling and using our services, users are indicating their agreement to adhere to the
                terms outlined in the privacy policy. It also offers users the option to refrain from enrolling
                if they don't wish to be bound by these terms.</p>
            <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">DISCLAIMER</h1>    
               <div className='ml-10 mt-4'>
                   <ul className='list-discc flex flex-col gap-y-8'>
                      <li className='sm:text-base text-gray-600 text-sm'><span className='font-semibold text-black  sm:text-lg text-base'>No Warranty: </span>
                         STAIRS doesn't provide a guarantee regarding the website's operation, quality, functionality,
                         or its fitness for specific purposes. We acknowledge that access to the site might be interrupted,
                         restricted, or delayed for various reasons.
                      </li>
                      <li className='sm:text-base text-gray-600 text-sm'><span className='font-semibold text-black  sm:text-lg text-base'>Content Disclaimer: </span>
                      We don't assure the accuracy, completeness, timeliness, or suitability of the material present
                      on the site. We absolve themselves from responsibility for any damages, losses, or consequential
                      losses arising from using the site or the material therein.</li>
                      <li className='sm:text-base text-gray-600 text-sm'><span className='font-semibold text-black  sm:text-lg text-base'>General Information: </span>
                      The content on the site is considered general information and isn't intended as advice on any particular matter.
                      We recommend that subscribers and readers seek professional advice before acting on any information found on the site
                      </li>
                      <li className='sm:text-base text-gray-600 text-sm'><span className='font-semibold text-black  sm:text-lg text-base'>Liability Disclaimer: </span>
                      STAIRS, along with its directors, employees, agents, representatives, and authors, disclaim any liability 
                      to any person, whether a subscriber or not, regarding any actions taken or omitted based on the contents
                       of the site or associated web pages.
                      </li>
                   </ul>
               </div>
               <p className='sm:text-base text-gray-600 text-sm mt-4'>Overall, this disclaimer aims to make users aware that the information provided on the website is general and not intended as specific advice.
                 It also clarifies that STAIRS disclaims liability for any actions taken based on the content available on the site.</p>
                 <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">1. Data which will be collected by us</h1>
                  <div>
                    <ul className='flex flex-col gap-y-8 ml-4 mt-4'>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl text-black font-semibold'>a.</span>Once you become a part of the STAIRS family, we will be collecting certain data from you which is directly entered by you on our online platform, such as, your personal
                            and academic information, information regarding the courses you opt for and important data with respect to the third-party platforms
                            we will be connected with, by virtue of you. Such data will include various forms of data
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2  text-xl text-black font-semibold'>b.</span>
                           Apart from the information entered by you, we will be collecting certain data automatically. The same shall be collected through the use
                           of server log files and tracking technologies such as ‘Cookies’, ‘Data Collection Tools’ etc. Such information shall include ‘Usage Data’ such 
                           as time spent on our pages by you, number of times our website was visited by you, pages visited, features and services used, etc., ‘System Data’ 
                           such as IP Address, device being used, browser, Operating System, etc., and Geographic Data such as your city, geographic co-ordinates, etc.
                           You may choose to share additional information with us such as address book, contact list etc. STAIRS is also authorized to use additional information
                           provided by you about self and your contacts (for Referral programs etc.) in course of engaging with our courses and other services.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2  text-xl text-black font-semibold'>c.</span>
                           When you interact online on our platform with other users or any or all of the faculties, or post answers, queries or reviews, such data will also be
                            collected by us and some of it may be publicly viewable as well, depending upon the nature of the content being posted.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2  text-xl text-black font-semibold'>d.</span>
                           All the data pertaining to the assignments solved by you and the tests attempted by you and your performance in the same shall also be recorded and we
                           have the right to use the data as deemed fit. Once you start solving assignments and preparing for different types of tests, your performance analysis
                           will be captured and used prudently.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl  text-black font-semibold'>e.</span>
                           When you purchase our product online, you can make the payment by way of netbanking (Only specific banks) or by way of credit, debit cards and wallets etc.
                           To ensure your security against any online fraud, we will not be collecting or storing any sensitive data pertaining to the card or the card holder.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl  text-black font-semibold'>f.</span>
                          In order to improve our services and to ensure that STAIRS is in pace with the needs of the ever-changing demands of the students, we will keep holding surveys
                           and promotional contests and challenges. In relation to the same, we may invite you to participate in the same and store the data that is provided from your end.
                            Apart from this, STAIRS reserves the right to use, publish and notify the names (either on our website or publicly) of the winners of such promotional contests
                             and challenges and for the purpose of distribution of rewards as well.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl text-black font-semibold'>g.</span>
                            Any data pertaining to any queries raised by you, or any issue or problem reported by you in relation to our services being used by you shall also be stored
                             for the purpose of looking into such issues and resolving the same.
                          </li>
                    </ul>
                    <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">2. Use of Cookies</h1>
                     <p className='mt-8 sm:text-base text-sm ml-1 text-gray-600'><span className='font-semibold mr-1'>STAIRS</span>uses cookies for the purpose of analyzing how our services are used by you,
                      for giving you a more personalized experience and recognizing you as and when you come back. We also use web beacons for the purpose of measuring the number of
                       times you visit our website and specific pages, your activities on our platform and advertising more efficiently and relevantly.</p>

                       <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">3. Data Usage</h1>
                       <p className='mt-8 sm:text-base text-sm ml-1 text-gray-600'>The data which is collected by us is used for various purposes.
                        STAIRS uses your data in accordance with the law and aims at ensuring that none of the data gets misused for any illegal purposes.
                         The major role of this data collection is:</p>
                 
                    
                         <ul className='flex flex-col gap-y-8 ml-4 mt-4'>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl text-black font-semibold'>1.</span>
                          To provide the right service/ services to you in relation to the course opted.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2  text-xl text-black font-semibold'>2.</span>
                          For timely responses and processing of courses, products and features selected by you.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2  text-xl text-black font-semibold'>3.</span>
                           For timely response to and resolution of your concerns and queries.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2  text-xl text-black font-semibold'>4.</span>
                          For facilitating effective communication to ensure that you are timely informed of the messages, notifications, progress of the course, performance analysis, newsletters and updates in relation to your specific course/courses.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl  text-black font-semibold'>5.</span>
                          For soliciting the valuable feedback of the users in relation to our services and products.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl  text-black font-semibold'>6.</span>
                          For developing new products, e-services and other features for more user-friendly access to our products.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl text-black font-semibold'>7.</span>
                           For advertisement purposes.
                          </li>
                          <li className='sm:text-base text-sm text-gray-600'> <span className='mr-2 text-xl text-black font-semibold'>8.</span>
                          To ensure that the data of the users is protected against any fraud or any other issue.
                          </li>
                    </ul>
                   
                    <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">4. Sharing of your data</h1>
                    <p className='mt-8 sm:text-base text-sm ml-1'>As and when it is required, for the purpose of our website, the data provided by you may be shared
                     by the faculty members, our business partners, analytics, social media providers, promotions, and survey providers, etc.</p>

                    <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">5. Security</h1>
                    <p className='mt-8 sm:text-base text-gray-600 ml-1 text-sm'>At STAIRS, your security is of prime importance to us and we make it an endeavor to take all important measures
                    to ensure maximum data protection from our end. Unfortunately, it is not possible to guarantee 100 percent security under all circumstances.
                    Also, to ensure maximum security, we require your co-operation as well. Therefore, do not share your ID and Password with any third person.
                    if you feel there is any suspicious activity going on in relation to your account, inform us at the earliest. We will not be liable for any loss caused because of the delay on your end.</p>
                 
                    <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">6. Your Rights</h1>
                    <p className='mt-8 sm:text-base ml-1 text-gray-600 text-sm'>STAIRS understands how important your data is to you and for this we give you certain rights in relation to the use
                     of your data by us. The user shall have the right to opt out of any event or promotional challenges or competitions being offered by us. You can always reach 
                     out to us and make individual requests in relation to the use of your data. However, it shall be our discretion as to how such requests are entertained.</p>
                   
                    <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">7. Subscription</h1>
                    <p className='mt-8 sm:text-base text-gray-600 ml-1 text-sm'>Any contents and/or services on the site may be discontinued temporarily/permanently at any point of time with or without any prior notice.</p>
                    <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">8. Modifications and Amendments:</h1>
                    <p className='mt-8 sm:text-base text-sm ml-1'>STAIRS reserves the right and has the sole discretion to edit, modify, amend, or delete any document, information or other content appearing on the site.</p>

                      <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">9. Amendments and Changes in the Privacy Policy and Contact information</h1>
                      <p className='mt-8 sm:text-base ml-1 text-gray-600 text-sm'>STAIRS reserves the right to modify our contact information and this Privacy Policy from time to time and make such essential modifications as is required according to
                        the need of the hour. It is your responsibility to review the terms carefully from time to time. Once you continue to use our products and services after such changes have been made effective, it will be deemed
                        that you have accepted all the modifications and changes.</p>
                      <p className='mt-8 sm:text-base text-gray-600 text-sm'>In case of doubt or query, feel free to reach us via e-mail getelevated@stairs.in</p>
                                 
                      <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">10. Jurisdiction</h1>
                      <p className='mt-8 sm:text-base ml-1 text-gray-600 text-sm'>Any dispute arising out of any transaction made by you on this website or due to any breach of these Terms of Use shall be subjected to Kanpur exclusively.</p>

                      <h1 className="text-2xl lg:text-3xl    font-semibold pt-10">11. Questions</h1>
                      <p className='mt-8 sm:text-base text-gray-600 text-sm'>If you have any questions, concerns, or disputes regarding our Privacy Policy or any other practices of STAIRS.in, or your dealings with the us, you can contact us at getelevated@stairs.in</p>
                  </div>     
            </Wrapper>
        <div>
        </div>
      </AnimationWrapper>
    <Footer/>
    </>
   
  )
}

export default PrivacyPage
