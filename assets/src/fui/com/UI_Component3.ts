/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Component3 extends fgui.GComponent {

	public m_pic:fgui.GLoader;
	public m_n7:fgui.GGraph;
	public static URL:string = "ui://cu1uq9ugr5yfh6";

	public static createInstance():UI_Component3 {
		return <UI_Component3>(fgui.UIPackage.createObject("com", "Component3"));
	}

	protected onConstruct():void {
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_n7 = <fgui.GGraph>(this.getChild("n7"));
	}
}