import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
    const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;
    type MailchimpFormData = {
        EMAIL: string;
        FNAME?: string;
        LNAME?: string;
    };
    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={(formData: MailchimpFormData) =>
                            subscribe(formData)
                        }
                    />
                )}
            />
        </>
    );
};
