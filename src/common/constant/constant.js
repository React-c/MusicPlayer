
const FontType = {
    FontBold:'Poppins-Bold',
    FontRegular:'Poppins-Regular',
    FontMedium:'Poppins-Medium',
}
const Icon= {
    Menu:'menu',//MaterialCommunityIcons
    Plus:'plus',//MaterialCommunityIcons
    Home: 'home', ////FontAwesome
    Setting:'settings',//Feather,
    FillSquarplus:'pluscircle',//Antdesign
    Call:'phone-call',//Feather
    Search:'search',//EvilIcons
   //0 Camera:'camera-outline',//inoicons
    Close:'close',//Antdesign
    Circleplus:'pluscircleo',//Antdesign
    Back:'arrow-back',//ionicons
    Pencil:'pencil',//SimpleLineicons
    Delete:'delete',//Antdesign,
    Link:'link-variant',//MaterialCommunityicon
    Fillcircleplus:'pluscircle',//Antdesign
    Share:'share',//Entypo
    Squareshare:'share-square-o',//FontAwesome
    Print:'printer',//Antdesign,
    Lock:'unlock',//EvilIcons
    Username:'user',//Feather
    ArrowRight:'arrowright',//Antdesign
    ArrowRightthink:'arrow-right',//fontawesome
    Passwordlock:'lock',//Feather
    Emailbox:'email-outline',//MaterialCommunityIcons
    Shopping:'shopping-basket',//FontAwesome
    Edit:'edit',//Antdesign
    Gallery:'image',//FontAwesome
    Create:'ios-create-outline',//ionicons
    clipboard:'clipboard-check-outline',//MaterialCommunityIcons
    DownArrow:'down',//AntDesign
    circle:'circle',//Feather
    RightIcon:'right',//Antdesign
    Check:'checkbox-marked-outline',//MaterialCommunityIcons
    AddUser:'ios-person-add',//Ionicons
    Search:'search',//EvilIcons
    eye:'eye',//Feather
    eyeoff:'eye-off',//Feather
    Camera:'camera',//FontAwesome
    Calendar:'calendar-text',//MaterialCommunityIcons
    User:'user',//Feather
    Editshop:'user-o',//FontAwesome
    Customerlist:'book',//Antdesign
    Share:'share-google',//EvilIcons
    Customersupport:'contact-support',//MaterialIcons
    Rate:'star-rate',//MaterialIcons
    Logout:'log-out-outline'//Ionicons
}
const Color = {
    white:'#ffffff',
    black:'#000000',
    green:'#00b300',
    red:'#eb0000',
    lightgray:'#ababab',
    darkgray:'#616161',
    blue:'#2e54c2',
    lightblue:'#a3b4e2'


    
}
const Limitations = {
    //sign up
        Name:100,
        Email:100,
    //log in
        PhoneNo:15,
        OTP:4,
    //Set shop
        ShopName:100,
        WebsiteUrl:100,
        ShopAddress:500,
        city:20,
        PostalCode:10,
    //New Customer
        BOD:10,
        Measurement:3,
        SpecialInstruction:1000,
        Price:7
    }
    
  
    export {FontType,Color,Icon}