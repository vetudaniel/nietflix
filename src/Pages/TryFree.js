import '../index.css'
import './TryFree.css'

export default function TryFree() {
    return (
        <div style={{paddingTop:60}}>
            <div className="tryFreeWrap">
                <div className="tryFreeCard">
                    <h3>30 Days Free Trial</h3>
                    <table>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>720p</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>2 Devices</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Parental Control</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Anytime cancel</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  disabled className="checkbox"/></td>
                            <td>Dolby Atmos 7.1 Sound</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" disabled className="checkbox"/></td>
                            <td>Offline mode</td>
                        </tr>
                    </table>
                    <div className="price">30 Days Free then 8.99€/Month</div>
                    <input className="loginBtn" type="submit" value="Try Now"/>
                </div>
                <div className="tryFreeCard">
                    <h3>Up to 1080p Resolution and up to 4 Devices</h3>
                    <table>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>1080p</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>4 Devices</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Parental Control</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Anytime Cancel</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Dolby Atmos 7.1 Premium</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Offline Mode</td>
                        </tr>
                    </table>
                    <div className="price">11.99€/Month</div>
                    <input className="loginBtn" type="submit" value="Try Now"/>
                </div>
                <div className="tryFreeCard">
                <h3>Up to 4k Resolution and Unlimited Devices</h3>
                <table>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>4k</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Unlimited Devices</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Parental Control</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Anytime Cancel</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Dolby Atmos 7.1 Pro</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked className="checkbox"/></td>
                            <td>Offline Mode</td>
                        </tr>
                    </table>
                    <div className="price">13.99€/Month</div>
                    <input className="loginBtn" type="submit" value="Try Now"/>
                </div>
            </div>
        </div>
    )
}



