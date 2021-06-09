import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponentCategory";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import ProductComponent from "../user/ProductListCategoryComponent";
import ProductDetailComponent from "../user/ProductInfoComponet";
import Demo from "../user/demo";
import MainComponent from "../../Maincomponent/Main";

const AppRouter = () => {
    return(
        <div style={style}>
            <BrowserRouter>
                    <Switch>
                        {/* <Route exact path="/" component={UserListComponent} /> */}
                        <Route exact path="/" component={MainComponent} />
                        <Route path="/product-list" component={ProductComponent} />
                        <Route path="/product-detail" component={ProductDetailComponent} />
                        <Route path="/demo" component={Demo} />

 	{/* 로그인 및 아이디 비밀번호 찾기 */}
                        <Route path="/login" component={LoginTextComponent}/>
                        <Route path="/findEmail" component={FindIDComponent} />
                        <Route path="/findPW" component={FindPWComponent} />
                        <Route path="/Email" component={ShowEmail}/>
                    </Switch>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;