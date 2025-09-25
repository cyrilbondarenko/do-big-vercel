import { BasePayload } from 'payload'
import { UploadedMedia, uploadMedia, uploadMediaBatch } from '../utils/media'

export const seedPrivacyPolicyPage = async (payload: BasePayload) => {
  await payload.updateGlobal({
    slug: 'privacyPolicyPage',
    data: {
      title: "DO BIG STUDIOS WEBSITE PRIVACY POLICY",
      date: '01/23/2025',
      content: {
        root: {
          "type": "root",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "The website at dobiggames.com is operated by Mobile Game Advertising & More, Inc, operating as Do Big Studios. The following is a statement of our policies, effective as of the above date, regarding the manner and extent to which we collect and use information about you. We collect minimal information from you to facilitate your use of the website and to respond to your information requests. We will always strive to preserve the security of your private information in accordance with the policies set forth below.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr",
              "textStyle": "",
              "textFormat": 0
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Website Use Information",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "tag": "ul",
              "type": "list",
              "start": 1,
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "listitem",
                  "value": 1,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "What we collect:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We may automatically track certain basic website user information about our website visitors, such as their internet protocol (IP) address, their browser type, their internet service provider (ISP), their hardware, operating system version, unique device identifiers, mobile network information, referring and exit pages, and their click patterns within the website (\"Website Use Information\"). To do this, we may use web beacons and other technologies provided by our website analytics partner, but we do not use cookies on our website. (A \"cookie\" is a piece of data stored on your computer that is tied to information about you, and a \"web beacon\" is a usually-transparent graphic image placed on the website to help report the above information). ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 2,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "How We Use It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We use Website Use Information to do internal research on our visitors' usage patterns, demographics, interests and general behavior to better understand how they use our website and what might make it better. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 3,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "The Extent to Which We Disclose It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We may contract with various partners to help manage and optimize our business communications. For example, we use the services of a website analytics partner to help us measure the effectiveness of our website and to better understand how our visitors use the website. Other than your email address and any other specific exceptions set forth below, no personally identifiable information will be shared with our website analytics partner or other partners without your consent. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 4,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "How You Can Review and Modify It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " Website Use Information is not information you can review or modify.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                }
              ],
              "listType": "bullet",
              "direction": "ltr",
              "textFormat": 1
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Registration Information",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "tag": "ul",
              "type": "list",
              "start": 1,
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "listitem",
                  "value": 1,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "What we collect:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We retain the information you voluntarily give to us during your use of the website, which consists solely of your email address and any dialogue you may enter into a website form requesting information from us (“Registration Information”). We collect minimal information from users under 13 years of age (or under 14 for Florida residents) only with verifiable parental consent, as required by applicable privacy laws such as COPPA and related state regulations. These restrictions ensure compliance with federal and state laws protecting children's online privacy",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 2,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "How We Use It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We use Registration Information to provide you with the information you request about the DoBigStudios services, and we will not use it for any other purpose without your consent.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 3,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "The Extent to Which We Disclose It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We will not disclose your Registration Information to any third party without your consent except for the general exceptions set forth below and with respect to our affiliates or other trusted businesses or persons we use to process the information for us who are subject to our instructions, our Privacy Policy, and any other appropriate confidentiality and security measures",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 4,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "How You Can Review and Modify It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " You may review and edit your Registration Information by contacting us at ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    },
                    {
                      "type": "autolink",
                      "fields": {
                        "url": "mailto:info@dobigstudios.com",
                        "linkType": "custom"
                      },
                      "format": "",
                      "indent": 0,
                      "version": 2,
                      "children": [
                        {
                          "mode": "normal",
                          "text": "info@dobigstudios.com",
                          "type": "text",
                          "style": "",
                          "detail": 0,
                          "format": 8,
                          "version": 1
                        }
                      ],
                      "direction": "ltr"
                    },
                    {
                      "mode": "normal",
                      "text": ".",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 8,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                }
              ],
              "listType": "bullet",
              "direction": "ltr"
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Aggregated Information",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "tag": "ul",
              "type": "list",
              "start": 1,
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "listitem",
                  "value": 1,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "What we collect:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " Notwithstanding the above policies, we may use all of the information discussed above to develop aggregated information about our website visitors and product and service subscribers and their use of the website, products and services (\"Aggregated Information\"). Aggregated Information will not contain any personally identifiable information about you.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 2,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "How We Use It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We may use Aggregated Information for a variety of purposes, including improvement of the website or our products and services, coordination and cooperation with our website analytics partners, the negotiation of relationships with service, marketing or advertising partners, and other business purposes.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 3,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "The Extent to Which We Disclose It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " We may disclose Aggregated Information in any manner required to use it in the manner discussed above.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 4,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "How You Can Review and Modify It:",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " You will not have access to any Aggregated Information",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                }
              ],
              "listType": "bullet",
              "direction": "ltr"
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Other Possible Uses or Disclosures of Your Information",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "tag": "ul",
              "type": "list",
              "start": 1,
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "listitem",
                  "value": 1,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Legal Compulsion. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": "Notwithstanding the above policies, we may disclose any of the above information in the event we are required to do by law for purposes of law enforcement or through judicial process. You authorize us to disclose any such information to law enforcement or other government officials, and to other people who are authorized by court order or other judicial process to obtain it, as we, in our sole discretion, believe necessary or appropriate in connection with an investigation of fraud, intellectual property infringements or other activity that is illegal or may expose us or you to legal liability. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 2,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Enforcement of Rights/Obligations.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " Notwithstanding the above policies, we may use or disclose any of the above information to the extent such use or disclosure is required to enforce our rights or protect our interests, to perform our legal obligations, or to provide, maintain, protect or improve our products and services. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 3,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Inherent Risks of Disclosure.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " Notwithstanding the above policies, you should understand that all of the above information may become accessible by, and made public through, syndication programs, search engines, metasearch tools, spyware, viruses, worms, hacker software and other similar programs and devices. While we make a good faith, commercially reasonable effort to ensure that the information described above remains secure and is only used and disclosed in accordance with our privacy policies, common experience has shown that despite such efforts, information accessible on or through the internet might on occasion be accessed by unauthorized users for unauthorized purposes. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                },
                {
                  "type": "listitem",
                  "value": 4,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Other Websites.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 1,
                      "version": 1
                    },
                    {
                      "mode": "normal",
                      "text": " Our Privacy Policy does not cover the information practices of other companies and organizations that may have links to or from our website or who advertise our services and may use cookies, pixel tags and other technologies to serve and offer relevant ads.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textFormat": 1
                }
              ],
              "listType": "bullet",
              "direction": "ltr"
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Deleting Your Information",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "If you use our website, products or services, we will try to provide you with access to any personal information we have collected, and if that information is inaccurate, to give you ways to update it or delete it – unless we have to keep that information for legitimate business or legal purposes. If you ask us to update or delete your personal information, we may ask you to verify your identity before we act on your request, and we may reject requests that are unreasonably repetitive, require unreasonable technical efforts, risk the privacy of others, or would be extremely impractical (for instance, requests concerning information residing on backup media). You should understand that your personal information may never be completely removed from our databases due to technical, business or legal constraints. However, as long as we retain any such information, it will remain subject to the applicable privacy policies pertaining to such information.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr",
              "textStyle": "",
              "textFormat": 0
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Changes to Privacy Policy",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "tag": "ul",
              "type": "list",
              "start": 1,
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "listitem",
                  "value": 1,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "If we decide to change any aspect of our Privacy Policy, we will immediately post the new privacy policy statement, which you will be able to access by clicking on the Privacy Policy link at the bottom of the website's homepage. We will handle all information acquired from you in accordance with the Privacy Policy statement in effect when the information is collected. ",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr"
                },
                {
                  "type": "listitem",
                  "value": 2,
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "If we make significant changes in our privacy practices, we will post a prominent notice on our website notifying you and others of the changes. In some cases we may also email you notifying you of the changes in our privacy practices. However, if you have deleted or deactivated your account, then you will not be contacted, nor will your previously-collected personal information be used in this new manner.",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr"
                }
              ],
              "listType": "bullet",
              "direction": "ltr"
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Dispute Resolution",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "We will work with you in good faith to resolve any disputes, claims or controversies relating to this Privacy Policy or previous Privacy Policy statements. We will work with the appropriate regulatory authorities, including local data protection authorities, to resolve any complaints regarding the transfer of personal data that we cannot resolve with you directly.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr",
              "textStyle": "",
              "textFormat": 0
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Your California Privacy Rights",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "In addition to the privacy rights provided for generally in these policies, California residents have the right to request in a mail, electronic mail or telephone communication, that we disclose for the immediately preceding calendar year the categories of your personal information shared with third parties, the names and addresses of such third parties, and the nature of each such third-party business. If you are a California resident and would like to make this request, please contact us at ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                },
                {
                  "type": "autolink",
                  "fields": {
                    "url": "mailto:info@dobigstudios.com",
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 2,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "info@dobigstudios.com",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 8,
                      "version": 1
                    }
                  ],
                  "direction": "ltr"
                },
                {
                  "mode": "normal",
                  "text": " or at 30 N. Gould St., Ste 7785, Sheridan, WY 82801 USA.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr",
              "textStyle": "",
              "textFormat": 0
            },
            {
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Contacting Us About the Privacy Policy",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "If you have any questions, concerns or suggestions regarding this Privacy Policy, please feel free to contact us at ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                },
                {
                  "type": "autolink",
                  "fields": {
                    "url": "mailto:info@dobigstudios.com",
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 2,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "info@dobigstudios.com",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 8,
                      "version": 1
                    }
                  ],
                  "direction": "ltr"
                },
                {
                  "mode": "normal",
                  "text": ". Please understand that no such communications will, in themselves, act to amend the Privacy Policy as posted.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr",
              "textStyle": "",
              "textFormat": 0
            }
          ],
          "direction": "ltr"
        }
      }
    },
  })
}
