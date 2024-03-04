import {Button} from "@trycreo/ui/dist/src/components/ui/button";
import {dummyAction} from "./actions";

import {
    Checkbox,
    FileInput,
    Form,
    Input,
    Radio,
    Select,
    Switch,
    Textarea,
} from "@trycreo/ui/dist/src/components/ui/form/index";
import {ParentLink} from "@/tools/kyc-form/parent-link";


async function MyForm() {
  return (
    <div className="p-4 w-1/2 mx-auto place-items-center bg-background mt-8">
        <ParentLink relativePath="/tools/user-profiles?some=value&hello=world" label="Click here for User Profiles" />
      <Form action={dummyAction}>
        <Input
            name="fullName"
            label="Full Name"
            description="Your full name"
            minLength={3}
            maxLength={7}
            disabled
        />

        <FileInput
            name="document"
            label="Document"
            description="Upload your document"
        />

        <br/>

        <Select
            name="email"
            options={["rohan.mayya@gmail.com", "saifsmailbox98@gmail.com"]}
            required
        />
        <Checkbox
            name="mobile"
            description="Do you accept the terms and conditions?"
        />
        <Radio
            name="type"
            label="Notify me about..."
            options={[
              "All new messages",
              "Direct messages and mentions",
              "Nothing",
            ]}
            required
        />

        <br/>

        <Switch
            name="emails"
            label="Marketing Emails"
            description="Receive emails about new products, features, and more."
        />

        <br/>

        <Textarea
            name="textAreaMessage"
            description="Your message"
            label="Your Message"
        />

        <br/>

        <Button>Submit</Button>

        <br/>
      </Form>
    </div>
  );
}

export default MyForm;
