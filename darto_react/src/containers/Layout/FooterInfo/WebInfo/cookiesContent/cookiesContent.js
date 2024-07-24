import React from "react";
// import "./About.css";
import { Link, useHistory } from "react-router-dom";
const cookiesContent = () => {
  return (
    <>
      <div class='about_text_Align padding_bottom_nine9 width_60_media'>
        <div class='about_Header'>
          <span>Cookie Policy </span>
        </div>
        <div class='about_Header'>
          <h3> Introduction </h3>
        </div>
        <div class='about_Parra'>
          <div class='list_style_Color_d'>
            <p>
              Our website uses ‘cookies’, which are small data files that are
              used as unique identifiers. They are sent from the website’s
              servers to your computer or mobile phone and stored on your
              device, and may then be sent back to our website’s servers with
              updated data as you browse our website.
            </p>
            <p>
              Cookies are used to record information about your preferences as
              you browse our website, which allows us to improve your experience
              by tailoring the website accordingly. Cookies can also be used to
              identify you every time you revisit our website.
            </p>
            <p>
              A ‘session cookie’ will expire at the end of your browsing session
              once you close your web browser; ‘persistent cookies’ on the other
              hand have a set expiry date and will be stored on your computer
              until either this date is reached, or you delete your cookies
              using your browser settings.
            </p>
            <br />
          </div>
        </div>
        <div class='about_Header'>
          <h3> How We Use Cookies </h3>
        </div>

        <div class='about_Parra'>
          <div class='list_style_Color_d'>
            <p>
              The following is a list of cookies used by our website, and what
              they are used for:
            </p>
            <p>www.google.com/intl/en/policies/privacy.</p>

            <br />
          </div>
        </div>
        <div class='about_Header'>
          <span>Third-Party Cookies </span>
        </div>
        <div class='about_Parra'>
          <div class='list_style_Color_d'>
            <p>
              Our website uses the following third-party suppliers and partners
              who may also set cookies on your computer or mobile phone as you
              browse our website.
            </p>
            <p>
              Please note that, where we embed content from third-party sites
              such as Flickr and YouTube, you may also have cookies from these
              third-party websites installed on your device. darto does not
              control these cookies and you should check the privacy policy of
              the relevant website for more information.
            </p>
            <p>
              Please also note that, if you use one of the ‘sharing tools’ on
              our website to share content using social networks, these social
              networks may install a cookie on your device. PDC does not control
              these cookies and you should check the privacy policy of the
              relevant website for more information.
            </p>
            <br />
          </div>
        </div>
        <div class='about_Header'>
          <span>Blocking Cookies</span>
        </div>
        <div class='about_Parra'>
          <div class='list_style_Color_d'>
            <p>
              The majority of web browsers (Firefox, Internet Explorer, Google
              Chrome, Opera, Safari etc.) will allow you to block cookies from
              being installed on your device via your browser settings.
            </p>
            <p>
              Depending on your browser, further information can be obtained via
              the following links:
            </p>

            <p>
              Firefox –{" "}
              <Link to="https://support.mozilla.org/en-US/kb/Cookies">
                http://support.mozilla.org/en-US/kb/Cookies
              </Link>
            </p>
            <p>Internet Explorer – http://support.microsoft.com/kb/196955</p>
            <p>
              Google Chrome -
              http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647
            </p>
            <p>
              Safari –
              http://docs.info.apple.com/article.html?path=Safari/3.0/en/9277.html
            </p>
            <p>
              Opera - http://www.opera.com/browser/tutorials/security/privacy/
            </p>
            <p>
              Mobile phone users may have to refer to their handset manual for
              details on how to block cookies using their mobile browser.
            </p>
            <p>
              Please be aware that restricting the use of cookies may impact on
              the functionality of our website
            </p>
            <br />
          </div>
        </div>
        <div class='about_Header'>
          <span>Deleting Cookies</span>
        </div>
        <div class='about_Parra'>
          <div class='list_style_Color_d'>
            <p>
              The majority of web browsers (Firefox, Internet Explorer, Google
              Chrome, Opera, Safari etc.) will allow also allow you to delete
              selected / all cookies currently installed on your device.
            </p>
            <p>
              Depending on your browser, further information can be obtained via
              the following links:
            </p>
            <p>Firefox – http://support.mozilla.org/en-US/kb/Cookies</p>
            <p>Internet Explorer – http://support.microsoft.com/kb/196955</p>
            <p>
              Google Chrome -
              http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647
            </p>
            <p>
              Safari –
              http://docs.info.apple.com/article.html?path=Safari/3.0/en/9277.html
            </p>
            <p>
              Opera - http://www.opera.com/browser/tutorials/security/privacy/
            </p>
            <p>
              Similarly, mobile phone users may have to refer to their handset
              manual for details on how to delete cookies using their mobile
              browser.
            </p>
            <p>
              Please note that this will usually only remove any cookies
              currently installed on your device; you must also change your
              browser settings (above) if you wish to prevent cookies being
              installed in future. Please be aware that deleting cookies already
              stored on your device may impact on the usability of our website.
            </p>
            <p>Contact Details and Useful Information</p>
            <p>
              This website is owned and operated by darto. If you have any
              questions about our use of cookies and how we collect and store
              your data, then please contact us here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default cookiesContent;
