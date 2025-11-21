
export const MODAL_CONTENT = {
  about: {
    title: "About doodax.com",
    content: `Welcome to **doodax.com**, a premier digital utility designed for modern web professionals, SEO specialists, and developers.

**Our Mission**
In the intricate architecture of the World Wide Web, transparency is key. A single broken link or misconfigured redirect can cascade into significant traffic loss and user frustration. Our mission is to illuminate these hidden pathways. We provide a powerful, server-side diagnostic tool that reveals exactly what happens between a click and a page load, ensuring a faster, more reliable web for everyone.

**What We Do**
doodax.com offers a sophisticated **URL Redirect Checker** that simulates search engine crawlers. Unlike standard browser extensions that only show the client-side perspective, our technology executes server-side requests. This allows us to:
*   **Reveal True Status Codes:** Accurately distinguish between 301 (Permanent) and 302 (Temporary) redirects.
*   **Detect Infinite Loops:** Identify configuration errors that cause "Too Many Redirects" failures.
*   **Analyze Latency:** Measure the time delay introduced by each hop in a redirect chain.
*   **Validate Security:** Ensure proper HTTP to HTTPS migration paths.

**Technology & Performance**
Built on a high-performance stack utilizing React, TypeScript, and serverless architecture, doodax.com is engineered for speed and reliability. We prioritize user experience, ensuring our tools are accessible, responsive, and intuitive.

**Ownership & Contact**
doodax.com is independently owned and maintained by **HSINI MOHAMED**, a passionate Full Stack Engineer dedicated to building open, accessible web tools.

*   **Website:** [doodax.com](https://doodax.com)
*   **Email:** hsini.web@gmail.com
*   **Github:** [github.com/hsinidev](https://github.com/hsinidev)`
  },
  contact: {
    title: "Contact Us",
    content: `We value your feedback and are here to assist you. Whether you have technical questions, partnership proposals, or legal concerns, please use the information below to reach us.

**General Inquiries & Support**
For assistance with the Redirect Checker tool or to report bugs:
*   **Email:** hsini.web@gmail.com
*   **Subject Line:** Please use "Support: [Issue Summary]"
*   **Response Time:** We strive to respond to all legitimate inquiries within 24-48 hours.

**Business & Partnerships**
Interested in advertising, API access, or white-label solutions?
*   **Email:** hsini.web@gmail.com
*   **Subject Line:** "Business Inquiry: [Company Name]"

**Legal & Privacy**
For matters related to data privacy, GDPR/CCPA requests, or copyright:
*   **Email:** hsini.web@gmail.com
*   **Attention:** Legal Compliance Officer

**Mailing Address**
Physical mailing address is available upon request for formal legal correspondence.`
  },
  guide: {
    title: "User Guide: How to Use the Redirect Checker",
    content: `**Getting Started**
The doodax.com Redirect Checker is designed to be simple yet powerful. Follow these steps to analyze any URL.

**Step-by-Step Instructions**
1.  **Enter URL:** Type or paste the full URL you want to test into the main input field (e.g., \`https://yoursite.com/old-page\`).
2.  **Start Trace:** Click the "Trace Redirects" button.
3.  **Analyze Results:** The tool will display the step-by-step path the server takes to reach the final destination.

**Understanding the Results**

*   **Status Codes:**
    *   **200 OK:** Success. The page loaded correctly.
    *   **301 Moved Permanently:** The URL has changed forever. SEO value is passed to the new URL.
    *   **302 Found / Temporary:** The URL has changed temporarily. SEO value is NOT passed.
    *   **404 Not Found:** The page does not exist. This is a broken link.
    *   **500 Server Error:** The web server encountered an internal error.

*   **Redirect Chains:**
    If you see multiple steps (e.g., A -> B -> C -> D), this is a "Chain". Chains slow down your site.
    *   *Best Practice:* Update URL A to redirect directly to URL D.

*   **Redirect Loops:**
    If the tool reports a loop (A -> B -> A), your site is broken for users and bots. You must fix your server configuration immediately.

**Advanced Tips**
*   Always check both \`http://\` and \`https://\` versions of your domain.
*   Check \`www\` vs non-www versions to ensure consistency.
*   Use this tool after a site migration to verify all old URLs point to the correct new locations.`
  },
  privacy: {
    title: "Privacy Policy",
    content: `**Privacy Policy for doodax.com**
*Last Updated: October 27, 2023*

At **doodax.com**, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by doodax.com and how we use it.

**1. Consent**
By using our website, you hereby consent to our Privacy Policy and agree to its terms.

**2. Information We Collect**
*   **Voluntary Information:** When you contact us via email (hsini.web@gmail.com), we collect your email address and any content you provide to answer your inquiry.
*   **Usage Data:** We analyze how users interact with our tool (e.g., number of traces performed) to improve system performance.
*   **URL Data:** The URLs you submit for analysis are processed transiently to provide the service. We do **not** store these URLs in a public database or sell this data to third parties.

**3. Log Files**
doodax.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, and gathering demographic information.

**4. Cookies and Web Beacons**
doodax.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. You can choose to disable cookies through your individual browser options.

**5. Advertising Partners Privacy Policies**
Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on doodax.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
*Note that doodax.com has no access to or control over these cookies that are used by third-party advertisers.*

**6. CCPA Privacy Rights (Do Not Sell My Personal Information)**
Under the CCPA, among other rights, California consumers have the right to:
*   Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
*   Request that a business delete any personal data about the consumer that a business has collected.
*   Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
If you make a request, we have one month to respond to you. Please contact us at hsini.web@gmail.com.

**7. GDPR Data Protection Rights**
We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
*   The right to access – You have the right to request copies of your personal data.
*   The right to rectification – You have the right to request that we correct any information you believe is inaccurate.
*   The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
*   The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
*   The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
*   The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

**8. Children's Information**
Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. doodax.com does not knowingly collect any Personal Identifiable Information from children under the age of 13.

**Contact Us**
If you have any questions about this Privacy Policy, please contact us:
*   Email: hsini.web@gmail.com`
  },
  tos: {
    title: "Terms of Service",
    content: `**Terms of Service for doodax.com**
*Last Updated: October 27, 2023*

**1. Acceptance of Terms**
By accessing the website at [https://doodax.com](https://doodax.com), you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

**2. Intellectual Property Rights**
Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.

**3. User Representations**
By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.

**4. Prohibited Activities**
You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
As a user of the Site, you agree not to:
*   Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
*   Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.
*   Circumvent, disable, or otherwise interfere with security-related features of the Site.
*   Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
*   Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.

**5. Disclaimer**
The materials on doodax.com's website are provided on an 'as is' basis. doodax.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

**6. Limitations of Liability**
In no event shall doodax.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on doodax.com's website, even if doodax.com or a doodax.com authorized representative has been notified orally or in writing of the possibility of such damage.

**7. Modifications and Interruptions**
We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.

**8. Governing Law**
These terms and conditions are governed by and construed in accordance with the laws of the global internet community and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

**9. Contact Us**
In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
hsini.web@gmail.com`
  },
  dmca: {
    title: "DMCA Policy",
    content: `**Digital Millennium Copyright Act (DMCA) Notice**

**doodax.com** respects the intellectual property rights of others. We comply with the provisions of the Digital Millennium Copyright Act (DMCA).

**Notification of Infringement**
If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the written information specified below:
1.  An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.
2.  A description of the copyrighted work that you claim has been infringed upon.
3.  A description of where the material that you claim is infringing is located on the site.
4.  Your address, telephone number, and e-mail address.
5.  A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.
6.  A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.

**Counter-Notification**
If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner’s agent, or pursuant to the law, to post and use the material in your content, you may send a counter-notice containing the following information to the Copyright Agent:
1.  Your physical or electronic signature.
2.  Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled.
3.  A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content.
4.  Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in your district, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.

**Contact Us**
Please direct DMCA notices to our designated Copyright Agent at:
**Email:** hsini.web@gmail.com`
  }
};
