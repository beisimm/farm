/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wk8 extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n1:fgui.GGraph;
	public static URL:string = "ui://cu1uq9ugnkrtju";

	public static createInstance():UI_wk8 {
		return <UI_wk8>(fgui.UIPackage.createObject("com", "wk8"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n1 = <fgui.GGraph>(this.getChild("n1"));
	}
}