import { ActivityIndicator } from 'react-native';
import { Color } from '../constant/constant';

const Message = {
  //network
    Something_Went_wrong: 'Something went wrong',
    Check_internet :'Internet Required',
    
  //comman messges
    Success:'Success',
  //Welcome
    Lets_Create_Your_Own_Style:"Let's Create Your Own Style",
    Give_me_time_and_Ill_give_you_a_revolution:"Give me time and I'll give you a revolution.",
    I_want_people_to_be_afraid_of_the_women_I_dress:'I want people to be afraid of the women I dress.',
    Get_Started:'Get Started',
    Already_have_an_account:'Already have an account?',
    // Sign_in:'Sign in',


  //Sign up
    CreateAccount:'Create Account',
    // Username:'Username',
    // Email:'Email',
    // Password:'Password',
    // Confirm_Password:'Confirm_Password',
    By_signing_up_you_agree_to_our:'By signing up you agree to our',
    Privacy_Policy_and_Terms:'Privacy Policy and Terms.',
    SIGN_UP:'SIGN UP',
    // Already_have_an_account:'Already have an account?',
    Sign_In:'Sign In', 

  //Sign Up validetion
    Name : 'Enter the user name',
    Email:'Enter email address',
    ValidEmail:'Please enter valid email',
    Password:'Enter Password',
    Confirm_Password:'Enter confoirm_password',
    passwordPattern:'Password must be at least 8 character, Uppercase letter, Lowercase letter, Special character, Numeric ',
    Passwordmacth:'Password and confirm_password not match',

  //Login
    Verification:'Verification',
    Enter_Your_Phone_Number_to_Continue:'Enter Your Phone Number to Continue',
    91:'+91',
    We_will_send_a_OTP_to_verify_Your:'We will send a OTP to verify Your',
    number_No_fees_will_apply:'number, No fees will apply',

    // enter_your_number:'enter your number',

  //Login validetion
    mobileno:'Enter mobile number',
    phonevalid:'Please enter valid mobile Number',

  //OTP
    One_Time_Password:'One Time Password',
    Enter_the_OTP_sent_to_your_Mobile:'Enter the OTP sent to your Mobile',
    Didnt_receive_it:"Didn't receive it?",
    Click_here:'Click here',

  //setuoshop
    Welcome_to:'Welcome to',
    Tailormate:'Tailormate',
    We_are_About_to_Finish_just_Fill_some_Information_For_us:'We are About to Finish, just Fill some Information For us:',
    Set_Up_Your_Shop:'Set Up Your Shop',
    Stitching_Done_For:'Stitching Done For',

  //SetupShop Validetion
    Shopaddress:'Enter shop address',
    Pincode:'Enter your postal code',

  // Orderlist
    Order_List:'Order List',
    Cancel:'Cancel',

  //Order detail
    Order_Detail:'Order Detail',
    Customer_Name:'Customer Name:',
    Order_Number:'Order Number:',
    Order_status:'Order status:',
    Order_Date:'Order Date:',
    Balance_Due:'Balance Due',
    Payment_Received:'Payment Received',
    Total_Bill_Amout:'Total Bill Amout',
    Received_Payment:'Received Payment',
    View_Bill:'View Bill',

  //Customer detail
    Gender:'Gender',
    Address:'Address',
    Mobile_Number:'Mobile Number',
  
  //ViewBodyMeasurement
    Full_Body_Measurement:'Full Body Measurement',

  //New Customer
    New_Customer:'New Customer',
    Enter_Details:'Enter Details',

    Add_Customer_Address:'Add Customer Address',

  //New customer Validetion
    CustomerName:'Please enter customer name',
    Contact:'Please enter contact number',
    phonevalid:'Please Enter Valid Contact Number',
    Address:'Please Enter Postal Address',
    // Price:'Please enter price',
    // DeliveryDate:'Please enter delivery date',
  
  //Customer List
    Customer_List:'Customer List'

    //Add task
    // TaskName:'Please enter task name',
    
}
const snackbarshow = {
    text: 'Success',
     backgroundColor: Color.green 
}
 const Indicator = () =>{
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    return(
        <View>
            {loading ? <ActivityIndicator size="large"></ActivityIndicator> : (<View/>)}
        </View>
    )
 }

export {Message}