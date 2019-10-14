var countries = {
    AF: 'Afghanistan',
    AX: 'Åland Islands',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    VG: 'British Virgin Islands',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    BQ: 'Caribbean Netherlands',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    HR: 'Croatia',
    CU: 'Cuba',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    CD: 'Democratic Republic of the Congo',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands',
    FO: 'Faroe Islands',
    FM: 'Federated States of Micronesia',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    CI: 'Ivory Coast',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    XK: 'Kosovo',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Laos',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macau',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    KP: 'North Korea',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn Islands',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Reunion',
    RO: 'Romania',
    RU: 'Russia',
    RW: 'Rwanda',
    SH: 'Saint Helena',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'São Tomé and Príncipe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SX: 'Sint Maarten',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    KR: 'South Korea',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard and Jan Mayen',
    SZ: 'Eswatini',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syria',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom',
    US: 'United States',
    UM: 'United States Minor Outlying Islands',
    VI: 'United States Virgin Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VA: 'Vatican City',
    VE: 'Venezuela',
    VN: 'Vietnam',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe'
};

function addComments(fingerprint) {
    var disqus_config = function () {
        // see https://stackoverflow.com/questions/8944287/disqus-loading-the-same-comments-for-dynamic-pages
        this.page.url = 'https://pwnagotchi.ai/pwnfile/#!' + fingerprint;
        this.page.identifier = 'https://pwnagotchi.ai/pwnfile/#!' + fingerprint;
    };

    var d = document, s = d.createElement('script');
    s.src = 'https://pwnagotchi.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
}

function obj(root, parts) {
    var root_name = parts.shift();
    if (!(root_name in root)) {
        return null;
    } else if (parts.length === 0) {
        return root[root_name];
    }
    return obj(root[root_name], parts)
}

$(function () {
    if (window.location.pathname !== "/pwnfile/") {
        return;
    }

    var fingerprint = window.location.hash.substr(1);
    if( fingerprint[0] === '!' )
        fingerprint = fingerprint.substr(1);

    if (fingerprint.length !== 64) {
        window.location.href = "/";
        return;
    }

    var url = "https://api.pwnagotchi.ai/api/v1/unit/" + fingerprint;
    $.getJSON(url, function (data) {
        addComments(fingerprint);

        document.title = escape(data.name);
        console.log(document.title);

        $('*[class^="unit."]').each(function (_, element) {
            var name = $(element).attr('class').split(' ')[0];
            var parts = name.split('.');

            // remove unit.
            parts.shift();
            // console.log(parts);
            var v = obj(data, parts);
            // console.log("v = " + v);

            if (v !== null) {
                if (name.indexOf("_at") !== -1)
                    v = $.timeago(v);
                else if (name.indexOf('.country') !== -1)
                    v = countries[v];

                $(element).text(v);
            }
        });

        if (data['data'] && data['data']['session'] && data['data']['session']['epochs']) {
            $('#unitsession').show();
        }

        if (data['data'] && data['data']['brain']) {
            $('#unitlife').show();
        }
    });
});