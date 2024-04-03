const coordinates = [
    [106.01420668220486, 11.186269499842675], // Ben Cau - Chau Thanh
    [106.01748012968753, 11.187399571383976],
    [106.01807408187027, 11.187832214358412],
    [106.01853769111493, 11.188201030609216],
    [106.01890852068928, 11.188465136629583],
    [106.01925713194733, 11.188637527300035],
    [106.01978834596773, 11.188838909010455],
    [106.02050056608395, 11.189000597594069],
    [106.0208984020598, 11.189096045276727],
    [106.02097355770842, 11.189114083991464],
    [106.02403688506851, 11.18984912597642],
    [106.02440730158357, 11.189912265685917],
    [106.02488513569499, 11.190064915575311],
    [106.02513273216657, 11.190128110388912],
    [106.02616629924259, 11.190361315896642],
    [106.02673550469903, 11.190487409536804],
    [106.02702867425482, 11.190544139529514],
    [106.02739450918833, 11.190574038155113],
    [106.02803515399708, 11.19060982797966],
    [106.02837766278955, 11.190598713453186],
    [106.03452047025272, 11.189896375946118],
    [106.03459133461448, 11.18988329015732],
    [106.0346545721592, 11.189848834905478],
    [106.03593051427244, 11.188644011557777],
    [106.0380921011597, 11.18661629556529],
    [106.03891746505701, 11.18585615836369],
    [106.03920744348515, 11.185589974643927],
    [106.04054850011075, 11.184265611363891],
    [106.04134706358612, 11.183504678392968],
    [106.04188799786836, 11.182988575823332],
    [106.04218332601907, 11.182736610337816],
    [106.04234019069227, 11.182610558270735],
    [106.04812816049011, 11.1814789714512],
    [106.05308774369132, 11.180559833026049],
    [106.05534646991194, 11.180090749957966],
    [106.05718005021151, 11.179729033234763],
    [106.06018861472674, 11.17915645774599],
    [106.06309760560241, 11.178642639176003],
    [106.06341049540157, 11.178611200312716],
    [106.07055178191735, 11.179430618867155],
    [106.07658537837871, 11.179070228903736],
    [106.07674351436833, 11.179035947446382],
    [106.07578226831312, 11.18013834598097],
    [106.07600450294458, 11.180717325105208],
    [106.07570944756189, 11.181005285607394],
    [106.07584649925997, 11.181413614392003],
    [106.07648330799667, 11.182588649771873],
    [106.07687665142917, 11.183491895487261],
    [106.07647930642135, 11.183559255779437],
    [106.0770611424083, 11.185430953247351],
    [106.07752289535335, 11.18657198166536],
    [106.07797165959629, 11.186539122220212],
    [106.07814509100733, 11.186590437001222],
    [106.07819466463873, 11.187135254626263],
    [106.0784682815721, 11.187764853132006],
    [106.07857147143945, 11.188054357657427],
    [106.07896843525826, 11.188640272771934],
    [106.08019722537875, 11.18869802288312],
    [106.08086769075373, 11.188951916716636],
    [106.08130735032384, 11.18909366588755],
    [106.08166926996317, 11.189288424720853],
    [106.08194032596214, 11.189825502519152],
    [106.08363045291797, 11.191784274163632],
    [106.08434331990473, 11.19219663321098],
    [106.08472190847937, 11.192326546903187],
    [106.08502161797921, 11.192558530641813],
    [106.08586138128442, 11.19350244416409],
    [106.0872703545358, 11.195225630886853],
    [106.08769483776594, 11.195709671200019],
    [106.08851408498238, 11.196969832410538],
    [106.08896885926858, 11.198622148975057],
    [106.08904465945271, 11.19879666997177],
    [106.089745492124, 11.198736457977805],
    [106.09053100425861, 11.200145881200312],
    [106.09059326431458, 11.200380739932388],
    [106.0907178767987, 11.200763996112977],
    [106.09086673939905, 11.201073810305092],
    [106.09101752669073, 11.201172311720471],
    [106.09150654317027, 11.201099015288834],
    [106.09160349257844, 11.202300318874437],
    [106.09162717221771, 11.202532315929638],
    [106.09173872042373, 11.203065481187274],
    [106.09181192789752, 11.203595179826443],
    [106.09181192789758, 11.203595015383078],
    [106.0919833001611, 11.203903173532161],
    [106.0925833846747, 11.204901857107433],
    [106.09327099876016, 11.205768320066456],
    [106.09392082591968, 11.206761633317665],
    [106.0943623955534, 11.20738799415407],
    [106.09451160094166, 11.207653877818878],
    [106.0969957435897, 11.208279931261224],
    [106.09802415094735, 11.204878252693382],
    [106.09852861516116, 11.20467833132164],
    [106.0987689882058, 11.204916430978596],
    [106.0997515929952, 11.204826263053679],
    [106.10024101302093, 11.204799235657928],
    [106.10069530657798, 11.204933554935947],
    [106.1011102985856, 11.20492037482144],
    [106.10137829469363, 11.204816650408663],
    [106.10176737644593, 11.204540312632206],
    [106.10293447930974, 11.204741451264155],
    [106.10646834799357, 11.20451878260285],
    [106.10820984567067, 11.20445671110469],
    [106.10941842406265, 11.204425696346247],
    [106.11462872306386, 11.204102954821359],
    [106.11853041409492, 11.203823271088552],
    [106.1188823419866, 11.20382195412092],
    [106.11938110855915, 11.203845621592407],
    [106.12196456220661, 11.20359045876794],
    [106.12513338037658, 11.203345493359192],
    [106.12563097750102, 11.203332452065364],
    [106.12708711791792, 11.20324446939353],
    [106.12955665704622, 11.203022052961407],
    [106.13206213637477, 11.202728451133833],
    [106.13452171231779, 11.202569899376181],
    [106.13632917944378, 11.20242842326085],
    [106.13892746113883, 11.202210843266787],
    [106.1411553815898, 11.202013766745857],
    [106.14330164717465, 11.201816313214431],
    [106.14507718451162, 11.201649555045629],
    [106.14582981932207, 11.201558937456069],
    [106.14666774411728, 11.201417306847723],
    [106.14777398953552, 11.201387003993839],
    [106.14822119101557, 11.201372078741358],  // Ben Cau - Chau Thanh - Go Dau
    [106.14797984999434, 11.198339217781205],
    [106.14762241737056, 11.196260438327977],
    [106.14720055135473, 11.19510386131178],
    [106.1463595678304, 11.194116184439316],
    [106.1454701327085, 11.193469268084138],
    [106.14169349529716, 11.191005700534644],
    [106.14034792511183, 11.189663235533846],
    [106.13963304385278, 11.188420323494041],
    [106.13939720383145, 11.186598941262728],
    [106.1393642575559, 11.185342368935025],
    [106.13935282177754, 11.184901431865976],
    [106.13934250155746, 11.184577051075737],
    [106.13917962283023, 11.181691856811979],
    [106.13876923000566, 11.179033767454102],
    [106.13870275219152, 11.17859355808473],
    [106.13831192542361, 11.175753843032396],
    [106.13841318515951, 11.17361608369112],
    [106.13891302002303, 11.171581440496846],
    [106.13995185358833, 11.169204644995485],
    [106.1411520970805, 11.166740555370293],
    [106.14274208091196, 11.16450610726563],
    [106.1433017705667, 11.163746301419406],
    [106.14387944417396, 11.162980804856112],
    [106.14515872519151, 11.161888809817404],
    [106.14642894570602, 11.161440964173345],
    [106.14874633927619, 11.160896620336631],
    [106.15025200502046, 11.160344166026421],
    [106.15251198149127, 11.159256687640072],
    [106.15490031738257, 11.157815873551904],
    [106.15676764440582, 11.157058413711338],
    [106.15777458947589, 11.157042484379295],
    [106.15858349711075, 11.15730356879801],
    [106.15936350841638, 11.157807134864663],
    [106.16041449524978, 11.158417854100499],
    [106.16146745853904, 11.158675790368342],
    [106.16262681839609, 11.158843926690455],
    [106.16430449811378, 11.158767560215995],
    [106.16554132497089, 11.158950487752564],
    [106.16660808198691, 11.159285696349919],
    [106.1673413360498, 11.159667034075495],
    [106.16805910739345, 11.16024798418667],
    [106.16875968308746, 11.16108646339781],
    [106.16927967448679, 11.161910807537962],
    [106.17088245745677, 11.164871341355797],
    [106.17204862758543, 11.165911874961974],
    [106.17311061801503, 11.16679395530205],
    [106.1751848276946, 11.167663015015107],
    [106.17718461755888, 11.167723693937564],
    [106.18014965590672, 11.167516052697229],
    [106.18166456823892, 11.166999298195037],
    [106.18296822397232, 11.165903179828613],
    [106.18395829989177, 11.164688802657201],
    [106.18502687065924, 11.162750600886001],
    [106.18534656239076, 11.161406295475672],
    [106.18552987517775, 11.159972732451664],
    [106.18554607281291, 11.158050114582363],
    [106.18569764584163, 11.156891785140344],
    [106.1862020310645, 11.155945277417294],
    [106.18726952417667, 11.154662482829528],
    [106.18975628668889, 11.152710655850028],
    [106.19184656036981, 11.151259624769533],
    [106.19285559942857, 11.150817764203227],
    [106.19369365072608, 11.150619072488961],
    [106.19479170194566, 11.150604717045839],
    [106.19610708000994, 11.150955589210634],
    [106.19868276798215, 11.151886585461183],
    [106.20634270735552, 11.152892657498365],
    [106.21175243062467, 11.154447246657494],
    [106.21603241305394, 11.156080918255107],
    [106.21859643999024, 11.15693641986444],
    [106.22030490803498, 11.157134968091544],
    [106.22215172711223, 11.157028253383288],
    [106.22427562770854, 11.156478533082742],
    [106.22677432530018, 11.155608479622805],
    [106.22842294869818, 11.15452548495193],
    [106.22960739453369, 11.153172532266021],
    [106.23016218663773, 11.152069421256638],
    [106.23046609057135, 11.150970148606836],
    [106.23034443551347, 11.149535972157631],
    [106.23029989618769, 11.14810244440235],
    [106.23063575732864, 11.146788454244392],
    [106.23120539449495, 11.145464716898713],
    [106.2315934027328, 11.144563201644669],
    [106.23190232943821, 11.143834328784905],
    [106.232222639223, 11.143067349966733],
    [106.23254140229915, 11.142306201490966],
    [106.23276061179604, 11.141782675985034],
    [106.23310827190353, 11.140971621189596],
    [106.23463268255759, 11.137437073580314],
    [106.23774577572206, 11.132292839050947],
    [106.23785316612248, 11.13105846275047],
    [106.2375727712777, 11.129888457441938],
    [106.23749909133052, 11.129580458470699],
    [106.23726437516683, 11.1287120989393],
    [106.23672361758157, 11.126722825678353],
    [106.23600545620978, 11.125579055431057],
    [106.23444912211347, 11.123870610390725],
    [106.233518662823, 11.1234284336525],
    [106.23267952869048, 11.123458477278836],
    [106.2285591139773, 11.12539725075609],
    [106.22697299066161, 11.125595561966133],
    [106.22550934272954, 11.125411500319665],
    [106.22415008619325, 11.124924602546047],
    [106.22306746949991, 11.124099459290308],
    [106.2224571565092, 11.122985955017844],
    [106.22224249559737, 11.12179524930388],
    [106.222395585337, 11.119980995934815],
    [106.2230053960268, 11.11853168043596],
    [106.2237230535023, 11.116027857079462],
    [106.22439400307175, 11.109237102805395],
    [106.22492937865943, 11.106292418602104],
    [106.2255845480179, 11.103973566061198],
    [106.22625524740985, 11.10250854473406],
    [106.22724802032104, 11.101042625044128],
    [106.22880371324503, 11.100005519307919],
    [106.23079491054739, 11.099111330391217],
    [106.23486218493902, 11.097116048311245],
    [106.23750868378114, 11.095646067002564],
    [106.23861000112205, 11.094974494533897],
    [106.24148381667675, 11.093221233597006],
    [106.24245694044937, 11.09215095328006],
    [106.24372345244822, 11.089812289417644],
    [106.24456768502043, 11.088903631244953],
    [106.24528313887936, 11.088496478860018],
    [106.24614178025179, 11.08851361176376],
    [106.24679171521578, 11.088805901017725],
    [106.24744283092859, 11.089342100733043],
    [106.24869394421658, 11.090788400601074],
    [106.2499740621509, 11.092490991923935],
    [106.2513054394868, 11.093480763661297],
    [106.25249006526379, 11.093919021713607],
    [106.25374016980925, 11.093838544444814],
    [106.25523460228912, 11.093253871743473],
    [106.25661360606506, 11.092538927195116],
    [106.25783029362567, 11.091647667615268],
    [106.25851322156912, 11.09089948583394],
    [106.25924276287873, 11.089374108974088],
    [106.2604751891874, 11.085805153920832],
    [106.26248393408646, 11.08153761460122],
    [106.26255354094151, 11.081435965581795],
    [106.26262118468304, 11.081264719034545],
    [106.26268320728602, 11.081132770138565],
    [106.26468052881006, 11.077491702035605],
    [106.26645089465464, 11.075055200028302],
    [106.2676526299784, 11.071566911863101],
    [106.26869133536336, 11.06971462881127],
    [106.2697795909611, 11.067102104854353],
    [106.27003826807534, 11.065397945124104],
    [106.27000593287151, 11.064163062630424],
    [106.26972996380209, 11.06305979168522],
    [106.26931046958332, 11.062277029048778],
    [106.26834929863344, 11.060980971736113],
    [106.26672570817261, 11.05934179187331],
    [106.26497973724916, 11.058044330040408], // Trang Bang - Go Dau - Ben Cau
    [106.26396461109096, 11.058936137915547],
    [106.26316815425784, 11.059207457519884],
    [106.26207503271698, 11.059870276911642],
    [106.26003634834987, 11.060993681473732],
    [106.25948546520155, 11.061201651678202],
    [106.25848125859524, 11.061164644610024],
    [106.25793154012031, 11.061042317285592],
    [106.2574902303644, 11.060871220585915],
    [106.25651075223864, 11.06076071548948],
    [106.25578978106263, 11.060564390071384],
    [106.25527576262513, 11.060527749318897],
    [106.2548352370543, 11.060638161053115],
    [106.25335404319881, 11.061139772769918],
    [106.25206863354634, 11.061263614727272],
    [106.25127716390746, 11.061183230697063],
    [106.2503692945569, 11.061103940851886],
    [106.24943295147183, 11.06113990517198],
    [106.24876472463359, 11.06117630500394],
    [106.2477253091861, 11.06081060349746],
    [106.24719942838746, 11.060822346929553],
    [106.24675858310212, 11.061030114934141],
    [106.24640269782115, 11.06109087010509],
    [106.2459375555226, 11.061005314428838],
    [106.24536376753974, 11.060467380496704],
    [106.24472726058428, 11.059808108354288],
    [106.24427406674134, 11.059353431032191],
    [106.24291727932858, 11.058668624584975],
    [106.24179112142912, 11.058135638217218],
    [106.24105470500847, 11.057725492172795],
    [106.23992981374174, 11.056955977046444],
    [106.23960721269623, 11.056638315655155],
    [106.23953345375045, 11.056425860948886],
    [106.23954424923333, 11.056185458598584],
    [106.23938616867933, 11.055881617719134],
    [106.23933107670528, 11.05559840471983],
    [106.23936705883924, 11.055121723098134],
    [106.23931226756847, 11.054994503793502],
    [106.23918499462472, 11.054957302314795],
    [106.23896532920176, 11.05506677725752],
    [106.238718070955, 11.055232463434425],
    [106.23851564251513, 11.055223236388496],
    [106.23828647517875, 11.055121896899736],
    [106.23806770659769, 11.05490341281588],
    [106.23760086547242, 11.053987037212835],
    [106.23753662407502, 11.05368437721559],
    [106.23756340191501, 11.053511062803986],
    [106.2377475339712, 11.053336933811385],
    [106.2378934944823, 11.053034430592003],
    [106.2378757117801, 11.052880270531405],
    [106.23772434767612, 11.05265239539422],
    [106.23748439158307, 11.052451355802262],
    [106.23683685228998, 11.052576392443383],
    [106.23606322210522, 11.052830415302855],
    [106.23468171829023, 11.052881789263072],
    [106.233717127408, 11.05307276570701],
    [106.23289253941203, 11.053288494895298],
    [106.23270335918762, 11.053451616350094],
    [106.2317846963158, 11.05362537589385],
    [106.23159971676063, 11.053645147570432],
    [106.23147217097163, 11.05358726305295],
    [106.23133145436188, 11.053554075967517],
    [106.23105129212283, 11.053663473846038],
    [106.23087990423099, 11.053638571577592],
    [106.23057958776663, 11.053676501651085],
    [106.22978656506629, 11.054021689915638],
    [106.2295773160293, 11.053955831127679],
    [106.22942428355856, 11.05350558283726],
    [106.22924895571964, 11.053450320045913],
    [106.22879832228232, 11.053516139189963],
    [106.2285556287162, 11.05371343830294],
    [106.22822701083315, 11.054185938551823],
    [106.22768768918051, 11.054494122939667],
    [106.22720514973577, 11.054867913548133],
    [106.22632631562405, 11.05481267894809],
    [106.22490753032906, 11.05514180319888],
    [106.22449042389417, 11.055449707863481],
    [106.22408116097563, 11.055649901793199],
    [106.22378506379042, 11.055734018227735],
    [106.22328851784675, 11.05581953170739],
    [106.22302368453995, 11.055840658602063],
    [106.22277958195909, 11.055765589343725],
    [106.22259969235807, 11.055744643810973],
    [106.22227090533953, 11.055798428938356],
    [106.2217104182748, 11.056031432351263],
    [106.22099314122873, 11.056214242156928],
    [106.22057504098838, 11.056353849533274],
    [106.2198720225299, 11.05657805970291],
    [106.21957291378122, 11.056679167042601],
    [106.21919512972053, 11.056730308374505],
    [106.21880159311156, 11.056835641011563],
    [106.21804166818191, 11.05695660142481],
    [106.21717513513673, 11.057104992938903],
    [106.21588350233164, 11.057346668863348],
    [106.21551181273301, 11.057384723350763],
    [106.21464224956547, 11.057608024448065],
    [106.21344906567715, 11.057794968615033],
    [106.21264401343352, 11.057833675020449],
    [106.21201027863965, 11.057846558473894],
    [106.21154762570514, 11.057924339565034],
    [106.21040414376557, 11.058282220494357],
    [106.20965887878728, 11.058472817106418],
    [106.20680819394889, 11.059220703761698],
    [106.2050842355007, 11.059628755106075],
    [106.20390597430743, 11.059849614553213],
    [106.20147688285103, 11.060183650599136],
    [106.20115516127352, 11.060235337567827],
    [106.2008415524595, 11.060448499428738],
    [106.20067352303404, 11.06006295084774],
    [106.20056387257789, 11.059664110426473],
    [106.20032509491966, 11.05955109038843],
    [106.20005401312157, 11.059325882733615],
    [106.19996439886283, 11.059279780517887],
    [106.19985453367227, 11.059265532339202],
    [106.19915143488231, 11.059278624909016],
    [106.1985401115044, 11.059215443452475],
    [106.19796028581429, 11.059125949698284],
    [106.19744962778975, 11.05906155440876],
    [106.1968050689763, 11.059086288860518],
    [106.19637871807848, 11.059036546637943],
    [106.19525645941013, 11.058701532376983],
    [106.19478886540449, 11.058545240679694],
    [106.19410089914949, 11.058434475782079],
    [106.19361932843657, 11.05836759288415],
    [106.19325760331377, 11.058336135218545],
    [106.19267456544566, 11.058166905878561],
    [106.19168282728911, 11.057883063642759],
    [106.19159145192492, 11.057858164157297],
    [106.19126348633004, 11.057772679777871],
    [106.18990562346126, 11.057419847624843],
    [106.18962006134421, 11.057350730089066],
    [106.18891697874403, 11.057182986138779],
    [106.18717144323224, 11.056669741666468],
    [106.18693094943525, 11.056738151891627],
    [106.18641781757468, 11.056754112200364],
    [106.18571624627413, 11.056839842121754],
    [106.18526435295445, 11.056907499643648],
    [106.18475377519856, 11.057007996610343],
    [106.18439731083707, 11.056973897253714],
    [106.18370340932697, 11.056814497436536],
    [106.1823966713312, 11.059139357753272],
    [106.18158559145394, 11.060581994831265],
    [106.17920016967942, 11.06478182685834],
    [106.17843073433707, 11.066135687233336],
    [106.17558208882848, 11.071147708516103],
    [106.17507275117126, 11.072054508628048],
    [106.17388088430485, 11.07419306234232],
    [106.17271009809058, 11.076069965905502],
    [106.17237123831715, 11.076613200351881],
    [106.17029920526035, 11.079488099669636],
    [106.16938532392184, 11.080740040956254],
    [106.16813946972857, 11.082402730784743],
    [106.1677808253005, 11.082881413112048],
    [106.16764004997336, 11.083075977051813],
    [106.16682388616051, 11.084207159010207],
    [106.16456427321971, 11.087340081686339],
    [106.16382150447306, 11.088350435453545],
    [106.1623149189244, 11.090386293479103],
    [106.16009441484873, 11.09338573362931],
    [106.15834549172892, 11.095712238713212],
    [106.15726035473645, 11.097143954861455],
    [106.15619632406026, 11.09854834905059],
    [106.15471543931604, 11.100781918679091],
    [106.15404199247548, 11.101458440115563],
    [106.15347517813761, 11.10153359407753],
    [106.15263441337135, 11.10151110127431],
    [106.15090050810291, 11.101585976342763],
    [106.14538557532448, 11.10115423458137],
    [106.14397001563209, 11.100802017100468],
    [106.14326902491439, 11.100404000873231],
    [106.14201898497774, 11.099560290621415],
    [106.14034402434334, 11.098011464225957],
    [106.13960633144575, 11.097108748933861],
    [106.13899607923406, 11.095973309171214],
    [106.13960681214255, 11.097109029541821],
    [106.13899616749069, 11.095973160896923],
    [106.13804079270437, 11.095214816905143],
    [106.13597233624556, 11.094123038121062],
    [106.13304448847572, 11.092576954912605],
    [106.13053040523165, 11.091363717655288],
    [106.1286589397389, 11.090669537288948],
    [106.12687859055099, 11.090153689133752],
    [106.1256907639364, 11.090100888441894],
    [106.12387126930005, 11.089620857633944],
    [106.12261061211707, 11.088878072554458],
    [106.12159890726797, 11.087461632645324],
    [106.1209757263728, 11.086588486661574],
    [106.1204153716705, 11.085805018105434],
    [106.11964510507357, 11.084744016199027],
    [106.1187253086587, 11.083903435806967],
    [106.11630615522921, 11.082454972429575],
    [106.11351270683612, 11.079361856178238],
    [106.11153558676368, 11.076470229288779],
    [106.10973029739506, 11.073343778079993],
    [106.10870844655521, 11.072300412747893],
    [106.10737884671447, 11.071459522391226],
    [106.10594910854827, 11.070887310138527],
    [106.10478993307461, 11.070918667204156],
    [106.10342611006796, 11.071387561906954],
    [106.10131277398449, 11.07266004047969],
    [106.09960926627194, 11.075243797911991],
    [106.09838099827233, 11.078599813436814],
    [106.09851631128238, 11.079540030298585],
    [106.09899359592869, 11.082194551382177],
    [106.09950436962063, 11.083672748708018],
    [106.09970844744068, 11.085050855132371],
    [106.0995718876628, 11.08649367937981],
    [106.09906114689666, 11.08770311412475],
    [106.09906114689666, 11.08770311412475],
    [106.09800501447458, 11.088775147644835],
    [106.09662956176824, 11.089848439728815],
    [106.0960188959445, 11.090324738516864],
    [106.09550842014633, 11.090742761133571],
    [106.094185144548, 11.091827355397871],
    [106.09316322403006, 11.092764471185447],
    [106.09211052085863, 11.094281332130432],
    [106.09177430436092, 11.094765544236946],
    [106.09157908112896, 11.095064462666189],
    [106.09070151736023, 11.096412691597221],
    [106.09015946676679, 11.097262131845643],
    [106.08862847136989, 11.099743549806927],
    [106.08627770520563, 11.101083036071769],
    [106.08511723090005, 11.101250439392206],
    [106.08365114972314, 11.100878070580956],
    [106.08102731261431, 11.09889134753229],
    [106.07860876145186, 11.097243175553055],
    [106.07728014939183, 11.097039158812608],
    [106.07622312907128, 11.097273359935997],
    [106.07485919604655, 11.098411875019139],
    [106.07243876728477, 11.101666385724677],
    [106.07155248652342, 11.104419414273178],
    [106.06872100364527, 11.109217641046067],
    [106.06725347022358, 11.110647931556805],
    [106.06563611962395, 11.11221793583222],
    [106.0631665155283, 11.114577631790626],
    [106.05910612729758, 11.118269122430817],
    [106.05525191871916, 11.122294830942208],
    [106.05284472763505, 11.124287972684128],
    [106.0507261988051, 11.125507316800844],
    [106.04947625917148, 11.12586646712646],
    [106.04843331358236, 11.126380680681608],
    [106.04713930477367, 11.127486362820823],
    [106.04287672267584, 11.130198770600629],
    [106.03963822769886, 11.131739504512662],
    [106.03694532062109, 11.132272336828409],
    [106.03436162662896, 11.133462810535896],
    [106.03242963225443, 11.134360936545097],
    [106.0301613075575, 11.135417370891188],
    [106.02542102496837, 11.138062315557324],
    [106.02439742510789, 11.138732308845949],
    [106.02287516633132, 11.140796783272059],
    [106.02278580016599, 11.140914202854487],
    [106.02122602501282, 11.142958198643194],
    [106.01952037039675, 11.145843655321785],
    [106.0179497293988, 11.150073381337872],
    [106.01737165993525, 11.152621870406332],
    [106.01668607367672, 11.15581411582993],
    [106.0161814497238, 11.16212797415939],
    [106.01596050788707, 11.164893344545012],
    [106.01572413047764, 11.16780321882175],
    [106.01527929612085, 11.173213351781433],
    [106.01462828949117, 11.181140752214064],
    [106.01420668220486, 11.186269499842675], // Ben Cau - Chau Thanh
]

export {coordinates as BenCau};