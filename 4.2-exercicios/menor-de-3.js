const Marina = 30;
const Silvia = 7;
const Iza = 2;

if (Marina < Silvia && Marina < Iza) {
    console.log('Marina é a pessoa mais jovem e possui ' + Marina + ' anos de idade.');
} else if (Silvia < Marina && Silvia < Iza) {
    console.log('Silvia é a pessoa mais jovem e possui ' + Silvia + ' anos de idade.');
} else {
    console.log('Iza é a pessoa mais jovem e possui ' + Iza + ' anos de idade.');
}