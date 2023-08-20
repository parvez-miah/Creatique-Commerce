import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Show,
    HStack,
    Text,
    useDisclosure,
    IconButton,
    Hide,
} from "@chakra-ui/react";
import {
    MoonIcon,
    SunIcon,
    HamburgerIcon,
    CloseIcon,
    AddIcon,
} from "@chakra-ui/icons";
import { FaShoppingCart } from 'react-icons/fa';


import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onButtonClick = () => {
        window.open(Shubham_Verma_Resume);
    };

    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin()

    const [cart] = useCart()


    const handleLogOut = () => {
        logOut()
            .then(() => { })
    }



    return (
        <div id="navFix">
            <Box
                bg={useColorModeValue("gray.100", "gray.900")}
                px={9}
                width={["100%"]}
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack w="42%">
                        <Link to="/"><img style={{ width: '240px', height: '120px' }} className="logo" src="https://i.ibb.co/850FVJL/25224-294121-10150-image-removebg-preview.png" alt="" /></Link>
                    </HStack>

                    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>

                        <HStack spacing={8} alignItems={"center"}>
                            <HStack
                                as={"nav"}
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                                id="myDIV"
                            >

                                <Link to='/'>Home</Link>
                                <Link to='/menu'>Menu</Link>
                                <Link to='/order'>Order</Link>

                                {
                                    user ? <>
                                        <button style={{marginTop:'-4px'}} onClick={handleLogOut} className="btn btn-warning">LogOut</button>
                                    </> : <>
                                        <Link to='/register'>Register</Link>
                                    </>
                                }



                                {
                                    isAdmin ? <>   <Link to='/dashboard/admin-home'>

                                        <button style={{ marginTop: '-4px' }} className="btn">
                                            <FaShoppingCart></FaShoppingCart>
                                            <div class="badge badge-secondary">+{cart?.length || 0}</div>
                                        </button>
                                    </Link>  </> : <>   <Link to='/dashboard/mycart'>

                                            <button style={{ marginTop: '-4px' }}  className="btn">
                                            <FaShoppingCart></FaShoppingCart>
                                            <div class="badge badge-secondary">+{cart?.length || 0}</div>
                                        </button>
                                    </Link>  </>
                                }
                            </HStack>
                        </HStack>
                    </Flex>


                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Button
                                backgroundColor="#a891b7"
                                _hover={{ bg: "#a891b7", color: "black" }}
                                color="white"
                                variant="solid"
                                onClick={onButtonClick}
                                size={["sm", "md"]}
                                download="Shubham_Verma_Resume"
                                id="resumeBtn"
                            >
                                <a

                                    target="_blank"
                                    download="Shubham_Verma_Resume"
                                >
                                    RESUME
                                </a>
                                {/* <Link
                    id="navRes"
                    
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    download="Shubham_Verma_Resume"
                  >
                    RESUME
                  </Link> */}
                            </Button>
                        </Stack>
                    </Flex>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4}>

                                <Link to='/order'>Order</Link>
                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <Link to='/'>Home</Link>

                                </Button>

                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <Link to='/'>Home</Link>

                                </Button>
                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <Link to='/'>Home</Link>

                                </Button>
                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <Link to='/'>Home</Link>

                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <Link to='/menu'>Menu</Link>
                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <Link to='/order'>Order</Link>

                                </Button>

                                {




                                    user ? <>
                                        <Button className="btn btn-warning"
                                            onClick={() => {
                                                if (isOpen) {
                                                    onClose();
                                                } else {
                                                    onOpen();
                                                }
                                                handleLogOut();
                                            }}
                                            _hover={{
                                                textShadow: "#FC0 1px 0 10px",
                                                transform: "scale(1.2)",
                                            }}
                                        >
                                            LogOut
                                        </Button>


                                    </> : <>
                                        <Button
                                            onClick={isOpen ? onClose : onOpen}
                                            _hover={{
                                                textShadow: "#FC0 1px 0 10px",
                                                transform: "scale(1.2)",
                                            }}
                                        >

                                            <Link to='/register'>

                                                Registration
                                            </Link>
                                        </Button>
                                    </>

                                }
                                {




                                    isAdmin ? <>
                                        <p
                                            onClick={isOpen ? onClose : onOpen}
                                            _hover={{
                                                textShadow: "#FC0 1px 0 10px",
                                                transform: "scale(1.2)",
                                            }}
                                        >

                                            <Link to='/dashboard/admin-home'>

                                                <p style={{ marginTop: '-13px' }} className="btn">
                                                    <FaShoppingCart></FaShoppingCart>
                                                    <div class="badge badge-secondary">+{cart?.length || 0}</div>
                                                </p>
                                            </Link>
                                        </p>


                                    </> : <>
                                        <p
                                            onClick={isOpen ? onClose : onOpen}
                                            _hover={{
                                                textShadow: "#FC0 1px 0 10px",
                                                transform: "scale(1.2)",
                                            }}
                                        >
                                            <Link to='/dashboard/mycart'>

                                                <button style={{ marginTop: '-13px' }} className="btn">
                                                    <FaShoppingCart></FaShoppingCart>
                                                    <div class="badge badge-secondary">+{cart?.length || 0}</div>
                                                </button>
                                            </Link>
                                        </p>
                                    </>

                                }
                            </Stack>
                        </Box>
                    ) : null}
                </Flex>
            </Box>
        </div>
    );
}