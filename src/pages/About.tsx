import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import MainLayout from "./MainLayout";
import VerifiedIcon from "../Icons";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const About = () => {
    const data = [

        {
            id: 1,
            title: "İş Vizası",
            description: "İş yeri ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "2500 Euro",
            backgroundColor: "#DBD6F3",
            more: "Daha ətraflı oxu",
            detailsvisa: "İş vizası, xarici ölkədə qanuni şəkildə işləmək istəyən şəxslərə verilən xüsusi icazə sənədidir. Bu viza vasitəsilə siz müəyyən bir müddət ərzində, rəsmi əmək müqaviləsi əsasında işləyə bilərsiniz. Bizim vasitəçiliyimizlə iş vizası alma prosesi daha sürətli və rahat şəkildə həyata keçirilir. Sənədlərin hazırlanması, işəgötürənlərlə əlaqələrin qurulması və konsulluq proseslərinin idarə olunması tam şəkildə komandamız tərəfindən təşkil olunur.",
            consolvise: "İş vizası üçün konsulluq prosesi bir neçə mərhələdən ibarətdir. Əvvəlcə bütün sənədlər toplanır və qaydalara uyğun şəkildə tərcümə olunaraq təsdiqlənir. Daha sonra müsahibə üçün konsulluğa müraciət edilir. Komandamız sizi bu müsahibəyə hazırlayır və potensial suallar barədə ətraflı məlumat verir. Vizanın verilməsi üçün tələb olunan kriteriyaların yerinə yetirilməsi bizim nəzarətimiz altında olur. Vizaya dair bütün konsulluq işlərini sizə minimum yük düşəcək şəkildə həll edirik.",
            textVisa: "İş vizası sizin üçün Avropada yeni bir həyatın qapılarını açır. Peşəkar dəstəyimizlə siz sadəcə öz arzularınıza fokuslana bilərsiniz. Təklif etdiyimiz xidmətlərə sənəd toplanması, tərcümə və təsdiq, işəgötürənlə ilkin əlaqələrin qurulması, konsulluqla yazışmalar və müsahibəyə hazırlıq daxildir. Əlavə olaraq, iş yeri ilə razılaşma əldə olunduqdan sonra yaşayış yeri ilə də təmin olunursunuz. Hər şey tam şəkildə planlaşdırılır ki, siz rahatlıqla və stresssiz bir şəkildə yeni iş həyatınıza başlaya biləsiniz."

        },
        {
            id: 2,
            title: "Təhsil Vizası",
            description: "Universitet ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "1500 Euro",
            backgroundColor: "#DCFCE7",
            more: "Daha ətraflı oxu",
            detailsvisa: "Təhsil vizası, xarici ölkədə ali təhsil almaq istəyən tələbələr üçün nəzərdə tutulmuş xüsusi viza növüdür. Bu viza sizə universitet və ya digər ali təhsil müəssisələrində rəsmi tələbə statusu ilə oxumağa imkan yaradır. Təhsil vizası üçün müraciət prosesi bir neçə mərhələdən ibarətdir: universitetdən qəbul məktubunun alınması, sənədlərin hazırlanması, maddi imkanların sübutu və konsulluq müsahibəsi. Bütün bu mərhələlərdə sizə peşəkar dəstək göstərərək uğurla viza almanıza yardım edirik.",

            consolvise: "Konsulluq prosesi zamanı sizdən tələb olunan sənədlər arasında qəbul məktubu, maddi təminat sənədləri, tərcümə olunmuş və təsdiqlənmiş diplomlar, motivasiya məktubu və digər zəruri sənədlər yer alır. Biz sizin adınıza konsulluqla bütün yazışmaları aparırıq, sizi müsahibəyə hazırlayırıq və prosesin hər bir mərhələsində dəstək veririk. Sizin rahatlığınız üçün bütün texniki detalları öz üzərimizə götürürük.",

            textVisa: "Təhsil vizası vasitəsilə siz Avropada beynəlxalq səviyyəli təhsil ala bilər, eyni zamanda fərdi və peşəkar inkişafınıza böyük töhfə verə bilərsiniz. Bu vizaya sahib olmaqla siz yalnız təhsil almaqla kifayətlənmir, həm də gələcəkdə karyera imkanları qazanırsınız. Komandamız sizin üçün qəbul prosesi, sənəd hazırlanması, viza dəstəyi və yaşayış məsələlərini tam şəkildə təşkil edir. Məqsədimiz sizə sadə və rahat bir şəkildə təhsil həyatına başlamaq imkanı yaratmaqdır."


        },
        {
            id: 3,
            title: "Ausbildung Vizası",
            description: "Ausbildung şirkəti ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "1500 Euro",
            backgroundColor: "#F6E8CD",
            more: "Daha ətraflı oxu",
            detailsvisa: "Ausbildung vizası, Almaniyada peşə təhsili almaq istəyən şəxslər üçün nəzərdə tutulmuşdur. Bu viza sizə həm təhsil almağa, həm də praktiki iş təcrübəsi qazanmağa imkan verir. Ausbildung proqramları müxtəlif sahələri əhatə edir – tibb, texnologiya, iqtisadiyyat və s. Viza almaq üçün ilkin şərt Almaniyadakı bir Ausbildung müəssisəsindən rəsmi dəvət məktubunun alınmasıdır. Komandamız sizə bu prosesdə partnyor şirkətlərlə əlaqə qurmaqda və sənədləri düzgün hazırlamaqda yardımçı olur.",

            consolvise: "Konsulluq mərhələsində sizdən təhsil müqaviləsi, motivasiya məktubu, maddi təminat sübutu və digər sənədlər tələb olunur. Hər bir sənədin alman qanunvericiliyinə uyğun şəkildə hazırlanması vacibdir. Biz bu mərhələdə sizə müsahibə hazırlığı, sənədlərin tərcüməsi və təsdiqi, eləcə də konsulluğa müraciət prosesində tam dəstək veririk. Məqsədimiz viza prosesinin heç bir mərhələsində sizi tək buraxmamaqdır.",

            textVisa: "Ausbildung vizası ilə Almaniyada peşəkar bilik və bacarıqlar qazanaraq gələcəyinizi təmin edə bilərsiniz. Təhsil və iş bir arada olduğu üçün həm real təcrübə, həm də maliyyə müstəqilliyi əldə etmiş olursunuz. Biz sizə uyğun Ausbildung proqramlarının tapılması, sənədlərin hazırlanması, viza dəstəyi və yaşayış məsələlərinin həllində kömək edirik. Uğurlu gələcək üçün ilk addımı bizimlə atın!"

        },
        {
            id: 4,
            title: "Ailə Birləşimi Vizası",
            description: "Almaniya ilə razılıq",
            duration: "Sertifikatın alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "1700 Euro",
            backgroundColor: "#FDE68A",
            more: "Daha ətraflı oxu",
            detailsvisa: "Ailə birləşimi vizası, Almaniyada yaşayan ailə üzvlərinə qoşulmaq istəyən şəxslər üçün nəzərdə tutulmuş xüsusi viza növüdür. Bu viza vasitəsilə siz həyat yoldaşınızla, valideynlərinizlə və ya uşaqlarınızla yenidən bir araya gələ bilərsiniz. Ailə birləşməsi vizasının alınması üçün əsas şərtlərdən biri Almaniyada yaşayan şəxsin hüquqi statusa malik olması və sizi dəvət etməsidir. Əlavə olaraq, alman dili biliyinin A1 səviyyəsində olduğunu sübut etmək də tələb oluna bilər. Komandamız bu mürəkkəb və çoxsahəli prosesdə sizə peşəkar dəstək göstərir.",

            consolvise: "Konsulluğa müraciət zamanı sizdən nikah şəhadətnaməsi, doğum şəhadətnamələri, ailə əlaqəsini təsdiq edən digər sənədlər, dil biliyini sübut edən sertifikat, və Almaniyada yaşayan şəxsin yaşayış icazəsi təqdim olunmalıdır. Bütün sənədlərin alman dilinə tərcümə və notarial təsdiqi tələb olunur. Biz bütün bu sənədləri düzgün şəkildə hazırlayır, sizə konsulluq görüşünə yazılmaqda və müsahibəyə hazırlaşmaqda kömək edirik. Məqsədimiz, ailənizin birliyini ən qısa zamanda təmin etməkdir.",

            textVisa: "Ailə birləşimi vizası ailə dəyərlərinə verilən önəmin göstəricisidir. Bu viza ilə siz sevdiklərinizə qovuşmaqla yanaşı, Almaniyada birgə yeni həyat qurmaq fürsəti əldə edirsiniz. Biz bu prosesin hər bir mərhələsində sizin yanınızdayıq – sənədlərin toplanması, konsulluq dəstəyi, dil sertifikatı alınması və digər bütün texniki detalları sizin adınıza həll edirik. Ailənizlə birgə gələcəyə addımlamaq üçün ilk addımı bizimlə atın."

        },
        {
            id: 5,
            title: "Praktikant Vizası",
            description: "Praktikum şirkəti ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "2000 Euro",
            backgroundColor: "#E9D5FF",
            more: "Daha ətraflı oxu",
            detailsvisa: "Praktikant vizası, Almaniyada təcrübə keçmək istəyən tələbə və ya yeni məzunlar üçün ideal bir fürsətdir. Bu viza vasitəsilə siz seçdiyiniz sahədə beynəlxalq təcrübə qazanaraq gələcək karyeranıza güclü təkan verə bilərsiniz. Praktikumlar adətən 3-12 ay aralığında olur və həm ödənişli, həm də könüllü ola bilər. Praktikant vizasının alınması üçün Almaniyadakı şirkətdən rəsmi dəvət məktubu və təcrübə planı təqdim olunmalıdır. Komandamız sizə uyğun şirkətlərin tapılması və sənədlərin hazırlanmasında yardımçı olur.",

            consolvise: "Konsulluq üçün tələb olunan sənədlərə təcrübə proqramına dair razılaşma, motivasiya məktubu, maddi təminat sübutu və təhsil sənədləri daxildir. Eyni zamanda Almaniyanın əmək və sosial təminat orqanlarından alınan təsdiq sənədləri də tələb oluna bilər. Biz bu sənədlərin hazırlanması, tərcüməsi, təsdiqlənməsi və konsulluqla yazışmalar daxil olmaqla bütün mərhələlərdə sizin yanınızdayıq.",

            textVisa: "Praktikant vizası sizə yalnız iş təcrübəsi deyil, eyni zamanda mədəniyyətlərarası bacarıqlar və yeni perspektivlər qazandırır. Bu viza ilə Almaniyada yaşamaq və işləmək təcrübəsi qazanaraq, həm peşəkar, həm də şəxsi inkişafınızı təmin edə bilərsiniz. Komandamız sizə uyğun praktik proqramlarının tapılmasından tutmuş, viza sənədlərinin hazırlanmasına, yaşayış və digər təşkilati məsələlərin həllinə qədər hər mərhələdə dəstək verir. Gələcəyinizə beynəlxalq təcrübə ilə güc qatmaq üçün bizimlə əlaqə saxlayın."


        },
        {
            id: 6,
            title: "Turist Vizası",
            description: "Schengen vizanın alınmağı",
            duration: "Səfirliyə hazırlıq",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "500 Euro",
            backgroundColor: "#CFFAFE",
            more: "Daha ətraflı oxu",
            detailsvisa: "Turist vizası, qısa müddətli səyahət planlayan şəxslər üçün nəzərdə tutulub. Ən çox rast gəlinən viza növlərindən biri olan Schengen turist vizası ilə siz Almaniya başda olmaqla, digər Schengen ölkələrini də ziyarət edə bilərsiniz. Turistik məqsədlə səyahət etmək istəyirsinizsə, otel rezervasiyası, uçuş biletləri və maddi təminat sübutları öncədən təqdim olunmalıdır. Komandamız bu prosesdə sizə tam dəstək verir: marşrutun hazırlanması, sənədlərin düzgün doldurulması və səfirliyə təqdimatı ilə bağlı hər bir addımda yanınızdayıq.",

            consolvise: "Turist vizasına müraciət zamanı sizdən təqdim olunmalı sənədlərə şəxsiyyət sənədi, xarici pasport, iş yeri haqqında arayış (əgər varsa), bank çıxarışları, turistik plan, otel və aviabilet rezervasiyaları daxildir. Bu sənədlərin tərcüməsi və düzgün ardıcıllıqla təqdim olunması viza nəticəsinə birbaşa təsir göstərir. Biz sizin adınıza bu sənədləri hazırlayır, səfirliklə olan bütün əlaqələri təmin edirik və müsahibə öncəsi hazırlıq keçiririk.",

            textVisa: "Turist vizası ilə siz Almaniyanın və Avropanın ən gözəl şəhərlərini kəşf edə, mədəniyyətlərlə tanış ola və unudulmaz xatirələr yarada bilərsiniz. Biz sizin üçün rahat və stresssiz viza alma prosesi təmin edirik. Məqsədiniz istirahət, dostlarla səyahət və ya sadəcə yeni təcrübə qazanmaqdırsa – doğru ünvandasınız."


        },
        {
            id: 7,
            title: "Şans Kartı",
            content: "Vizası",
            description: "Almaniyada iş tapmaq.",
            duration: "Səfirliyə hazırlıq",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "2500 Euro",
            backgroundColor: "#FCD34D",
            more: "Daha ətraflı oxu",
            detailsvisa: "Şans Kartı vizası (Chancenkarte), Almaniyada iş axtarmaq məqsədilə orada müvəqqəti yaşamaq istəyən şəxslər üçün yeni tətbiq olunmuş vizadır. Bu viza sizə Almaniyada 6 aya qədər qalaraq, öz ixtisasınıza və təcrübənizə uyğun iş tapmaq imkanı yaradır. Vizaya müraciət etmək üçün müəyyən bal sistemi tətbiq olunur. Təhsil səviyyəsi, iş təcrübəsi, alman dili biliyi və yaş kimi meyarlar bal toplayır. Komandamız bu mürəkkəb sistemi sizə izah edir, lazımi balın toplanması və uyğun sənədlərin hazırlanmasında sizə dəstək olur.",

            consolvise: "Şans Kartı üçün müraciət zamanı təqdim edilməli sənədlər sırasına CV, diplom və təhsil sənədləri, iş təcrübəsini sübut edən sənədlər, dil sertifikatları və maddi təminatı sübut edən bank çıxarışları daxildir. Konsulluqla düzgün yazışmalar və sənədlərin formatı olduqca vacibdir. Biz sizin yerinizə bu texniki detalları həll edir və müraciətin uğurla nəticələnməsi üçün tam dəstək veririk.",

            textVisa: "Şans Kartı vizası sizin Almaniyada iş tapmaq və yeni bir həyat qurmaq üçün qapınızı açır. İş həyatına Almaniyada başlamaq istəyirsinizsə, bu viza sizin ilk addımınızdır. Biz sizə yalnız viza almaqda deyil, həm də Almaniyada uyğun vakansiyaların tapılması, CV hazırlanması və müsahibəyə hazırlıq mərhələlərində dəstək oluruq. Gələcəyiniz üçün bu fürsəti bizimlə birlikdə dəyərləndirin!"


        },
    ]
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <Pressable
            style={({ pressed }) => [
                styles.mapControl,
                { backgroundColor: item.backgroundColor },
                pressed && styles.hoveredStyle
            ]}
        >
            <Text style={styles.courseTitle}>{item.title}</Text>

            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.description}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.duration}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.textDesc}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.textOnline}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.textGroup}</Text>
            </View>
            <TouchableOpacity style={styles.buttonControl}>
                <Text style={styles.buttonText}>{item.price}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("DetailsVisa", { item })} style={styles.buttonControlAbout}>
                <Text style={styles.buttonTextAbout}>{item.more}</Text>
            </TouchableOpacity>

        </Pressable>
    );

    return (
        <MainLayout>
            <Wrapper>
                <View style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Xidmətlər</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.controlBorders}
                />
            </Wrapper>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        width: 120,
        backgroundColor: "#F3F0FF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 20,
    },
    headerButtonText: {
        fontSize: 16,
        fontWeight: "500",
    },
    mapControl: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
        marginBottom: 20,
    },
    // hoveredStyle: {
    //     backgroundColor: "white",
    // },
    controlBorders: {
        backgroundColor: "white",
        width: "98%",
        alignSelf: "center",
        paddingBottom: 20,
    },
    courseTitle: {
        fontSize: 19,
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "left",
    },
    textMap: {
        color: "black",
        fontSize: 16,
        flex: 1,
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    buttonControl: {
        backgroundColor: "#524FD5",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
    },
    circleIcon: {
        width: 7,
        height: 7,
        borderRadius: 10,
        backgroundColor: "gray",
        marginRight: 8,
    },
    buttonControlAbout: {
        backgroundColor: "transparent",



        alignSelf: "flex-end",

    },
    buttonTextAbout: {
        color: "black",
        fontSize: 16,
        fontWeight: "700",

    },
});
export default About;