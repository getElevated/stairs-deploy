import React from "react";
import AnimationWrapper from "../components/ui/animation";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextAnimation from "../components/common/textanimation";

const TermofServicePage = () => {
  return (
    <>
      <Navbar />
      <AnimationWrapper>
        <div className="h-[30vh]  rounded-sm   bg-[url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
          <Wrapper>
            <h1 className="text-4xl lg:text-5xl   text-white font-semibold pb-20 pt-20">
              <TextAnimation line2="Acceptance of Terms" />
            </h1>
          </Wrapper>
        </div>
        <Wrapper>
          {/* <h1 className="text-2xl lg:text-3xl font-poppins   font-semibold pt-10">Acceptance of Terms</h1> */}
          <p className="sm:text-base text-base mt-2 ml-1 text-gray-600">
            Occasionally, STAIRS.in offers products and services to enrolled
            candidates (referred to as "you" or "User") in various courses.
          </p>
          <p className="sm:text-base text-base mt-2 ml-1 text-gray-600">
            By registering or purchasing any products or services through the
            STAIRS website you indicate that you have comprehended,
            acknowledged, and agreed to adhere to the Terms of Use ("Terms")
            applicable during the entire validity period of the provided
            products and services.
          </p>
          <p className="sm:text-base text-base mt-2 ml-1 text-gray-600">
            Please note, these Terms of Use are subject to modifications at
            STAIRS sole discretion, and any alterations will be effective for
            purchases made after being posted on the relevant platform. It's
            advised to review these Terms before each registration or purchase.
            If you disagree with any part of these Terms of Use, refrain from
            making purchases or registering for our courses.
          </p>

          <p className="sm:text-base text-base mt-2 ml-1 text-gray-600">
            These Terms of Use are subject to change at any time, solely at
            STAIRS discretion, and these alterations will apply to purchases
            made after their posting on the platform. It's recommended to review
            these Terms of Use before each registration or purchase. If you
            disagree with any part of these Terms of Use, kindly avoid making
            purchases or registering for our courses.
          </p>

          <p className="font-semibold mt-8 ml-1 sm:text-base text-sm text-gray-600 ">
            PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY AS THEY
            CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES
            AND OBLIGATIONS.
          </p>
          <div className="ml-10 mt-4">
            <ul className="list-discc flex flex-col gap-y-8">
              <li className="sm:text-base text-gray-600 text-sm">
                <span className="font-semibold text-black  sm:text-lg text-base">
                  Account Creation:{" "}
                </span>
                Upon enrollment, users gain access to their accounts and course
                materials for a limited duration. Accounts are automatically
                closed when the enrolled course period ends. We reserve the
                right to disable or terminate accounts in emergencies, legal or
                policy-based reasons before the course period expires. Account
                access allows users a limited right to educational content and
                associated benefits included in the course. Users are not
                permitted to resell, reproduce, redistribute, or modify course
                materials or services in any form.
              </li>
              <li className="sm:text-base text-gray-600 text-sm">
                <span className="font-semibold text-black  sm:text-lg text-base">
                  Enrollment Rights and Account Access:
                </span>
                We don't assure the accuracy, completeness, timeliness, or
                suitability of the material present on the site. We absolve
                themselves from responsibility for any damages, losses, or
                consequential losses arising from using the site or the material
                therein.
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  3. Pricing, Payment Methods, and Refunds:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Various courses are priced differently or offered free;
                    prices might vary between the website and application due to
                    sales policies.
                  </li>
                  <li>
                    Promotional services offer discounted courses selectively
                    for a limited period; current price applies at purchase
                    time.
                  </li>
                  <li>
                    Prices can change later and may differ from the initial
                    purchase price.
                  </li>
                  <li>
                    Payment methods accepted include credit cards, certain debit
                    cards, and direct debit of accounts with specific banks, all
                    in Indian Rupees.
                  </li>
                  <li>
                    Generally, sales are final upon confirmation, and
                    cancellations are not allowed. Refunds might be considered
                    in exceptional cases like duplicate purchases or wrong
                    course selections, subject to specific timeframes and
                    circumstances.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  4. Use of Your Account:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Accounts and course materials must not be used for
                    commercial, illegal, or harassing purposes or to obtain
                    personal information from others.
                  </li>
                  <li>
                    Users are responsible for content posted on the platform and
                    must ensure it complies with laws and guidelines; STAIRS
                    reserves the right to remove objectionable content.
                  </li>
                  <li>
                    Prices can change later and may differ from the initial
                    purchase price.
                  </li>
                  <li>
                    By posting content, users grant STAIRS permission to use it
                    across various media without compensation.
                  </li>
                  <li>Users must log out after each session.</li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  5. Our Rights:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Services, products, and content remain STAIRS property and
                    are licensed for user access; users cannot use the STAIRS
                    name without authorization.
                  </li>
                  <li>
                    STAIRS has the right to alter, remove, or suspend content
                    without prior notice, preserve or disclose content or
                    personal information if necessary under the law or policy.
                  </li>
                  <li>
                    Users may be featured in STAIRS promotional materials
                    without making claims.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  6. Closure/Termination of Account:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Users can terminate subscriptions via email; automatic
                    closure occurs when the course duration expires.
                  </li>
                  <li>
                    STAIRS can terminate or suspend accounts for policy
                    violations, non-payment, illegal activities, technical
                    issues, or breaches of law.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  7. Using Our Services at Your Own Risk:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    STAIRS doesn't guarantee the reliability, validity, or
                    accuracy of its courses; users enroll at their own risk.
                  </li>
                  <li>
                    Users are responsible for the risks associated with courses,
                    including illness, injury, or lack of success in exams.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  8. Binding Agreement:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Using STAIRS services constitutes a legally binding
                    contract; disagreement with terms means users should not
                    register or use the services.
                  </li>
                  <li>
                    If any terms become invalid or unenforceable under local or
                    national law, they will be replaced by valid provisions,
                    while the rest of the terms will remain in effect.
                  </li>
                </ul>
              </li>
            </ul>

            <p className="sm:text-base text-sm text-black font-poppins">
              The terms and conditions cover various aspects comprehensively,
              ensuring users understand their rights, responsibilities, and
              STAIRS policies.
            </p>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  9. Disclaimers:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Products/services are provided "as is" without specific
                    result guarantees.
                  </li>
                  <li>
                    STAIRS disclaims warranties and does not ensure accuracy or
                    virus-free content.
                  </li>
                  <li>
                    References to products/services don't imply endorsement or
                    affiliation.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  10. Events Beyond Control:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    STAIRS isn't liable for failure to meet obligations due to
                    reasons beyond its control (Force Majeure), like natural
                    disasters or strikes.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  11. Indemnification:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Users indemnify STAIRS for harm, losses, or legal issues
                    caused by their actions, including violation of terms or
                    others' rights
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  12. Relationship Clarification:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Account creation doesn't establish partnership, employment,
                    or agent relationship between the user and STAIRS.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  13. Dispute Resolution:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>Disputes can be resolved by contacting support.</li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  14. Notices{" "}
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Notices about products/services may be sent via email,
                    postal mail, or posted on the website.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  15. Waiver
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Failure or delay in exercising rights under the agreement
                    doesn't constitute waiver.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  16 Books & Material:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Material distribution may vary; some exam-specific content
                    may be limited to select students.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  17 Cookies:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    By agreeing to terms, users allow STAIRS to place cookies on
                    their devices when using the website or services.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  18 Other:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    These terms supersede prior agreements, and the failure to
                    enforce any provision doesn't waive that right. If any part
                    of the terms is invalid, the rest remains in effect.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  19 Questions:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Contact information for inquiries or questions about terms
                    and practices.
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-discc flex flex-col gap-y-8">
              <li>
                <h1 className="lg:text-xl text-lg  font-poppins   font-semibold pt-10">
                  20 Jurisdiction:
                </h1>
                <ul className="sm:text-base text-sm list-disc mt-6 ml-8 text-gray-600 flex flex-col gap-y-4 ">
                  <li>
                    Any disputes arising from transactions or breach of terms
                    fall under the jurisdiction of Chandigarh exclusively.
                  </li>
                </ul>
              </li>
            </ul>

            <p className="sm:text-base text-sm text-black font-poppins mt-8">
              The terms emphasize user responsibility, Hitbullseye's limited
              liability, and the nature of the relationship between the user and
              the platform.
            </p>
          </div>
        </Wrapper>
        <div></div>
      </AnimationWrapper>
      <Footer />
    </>
  );
};

export default TermofServicePage;
